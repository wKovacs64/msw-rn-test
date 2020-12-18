import fs from 'fs';
import path from 'path';
import { rest } from 'msw';
import {
  mockUriGood,
  mockUriBad,
  mockUriSlowGood,
  mockUriSlowBad,
} from './fixtures';

const imageBuffer = fs.readFileSync(
  path.resolve(path.join('mocks', 'logo.png')),
);

export const handlers = [
  rest.get(mockUriGood, (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.set('Content-Length', imageBuffer.byteLength.toString()),
      ctx.set('Content-Type', 'image/jpeg'),
      ctx.body(imageBuffer),
    );
  }),
  rest.get(mockUriBad, (_, res, ctx) => {
    return res(ctx.status(404));
  }),
  rest.get(mockUriSlowGood, (_, res, ctx) => {
    return res(
      ctx.delay(500),
      ctx.status(200),
      ctx.set('Content-Length', imageBuffer.byteLength.toString()),
      ctx.set('Content-Type', 'image/jpeg'),
      ctx.body(imageBuffer),
    );
  }),
  rest.get(mockUriSlowBad, (_, res, ctx) => {
    return res(ctx.delay(500), ctx.status(404));
  }),
];
