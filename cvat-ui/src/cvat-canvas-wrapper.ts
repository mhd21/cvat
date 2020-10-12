// Copyright (C) 2020 Intel Corporation
//
// SPDX-License-Identifier: MIT

import {
    Canvas,
    CanvasMode,
    CanvasVersion,
    RectDrawingMethod,
    CuboidDrawingMethod,
    InteractionData as InteractionDataType,
    InteractionResult as InteractionResultType,
} from 'cvat-canvas/src/typescript/canvas';

export function convertShapesForInteractor(shapes: InteractionResult[]): number[][] {
    const reducer = (acc: number[][], _: number, index: number, array: number[]): number[][] => {
        if (!(index % 2)) { // 0, 2, 4
            acc.push([
                array[index],
                array[index + 1],
            ]);
        }
        return acc;
    };

    return shapes.filter((shape: InteractionResult): boolean => shape.shapeType === 'points' && shape.button === 0)
        .map((shape: InteractionResult): number[] => shape.points)
        .flat().reduce(reducer, []);
}

export type InteractionData = InteractionDataType;
export type InteractionResult = InteractionResultType;

export {
    Canvas,
    CanvasMode,
    CanvasVersion,
    RectDrawingMethod,
    CuboidDrawingMethod,
};
