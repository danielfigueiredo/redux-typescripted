import {
  MetaAction,
  PayloadAction,
} from './app.types';

export const createAction = <Type extends string, Meta>(type: Type, meta?: Meta): MetaAction<Type, Meta> =>
  ({ type, meta });

export const createPayloadAction = <Type extends string, Payload, Meta>(
  type: Type,
  payload: Payload,
  meta?: Meta,
): PayloadAction<Type, Payload, Meta> => ({
  ...createAction(type, meta),
  payload,
});
