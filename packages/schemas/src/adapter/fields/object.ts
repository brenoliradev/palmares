import FieldAdapter from '.';
import { SchemaAdapterNotImplementedError } from '../../exceptions';

import type SchemaAdapter from '..';
import type { ObjectAdapterTranslateArgs } from '../types';
import type WithFallback from '../../utils';


export function objectFieldAdapter<
  TTranslate extends ObjectFieldAdapter['translate'],
  TToString extends ObjectFieldAdapter['toString'],
  TFormatError extends ObjectFieldAdapter['formatError'],
  TParse extends ObjectFieldAdapter['parse']
>(args: {
  translate: TTranslate;
  toString?: TToString;
  formatError?: TFormatError;
  parse?: TParse;
}) {
  class CustomObjectFieldAdapter extends ObjectFieldAdapter {
    translate = args.translate as TTranslate;
    toString = args.toString as TToString;
    formatError = args.formatError as TFormatError;
    parse = args.parse as TParse;
  }

  return CustomObjectFieldAdapter as typeof ObjectFieldAdapter & {
    new (): ObjectFieldAdapter & {
      translate: TTranslate;
      toString: TToString;
      formatError: TFormatError;
      parse: TParse;
    }
  }
}

export default class ObjectFieldAdapter extends FieldAdapter {
  translate(_fieldAdapter: FieldAdapter, _args: ObjectAdapterTranslateArgs): any | WithFallback<'object'> {}

  parse(
    _adapter: SchemaAdapter,
    _fieldAdapter: FieldAdapter,
    _result: any,
    _value: any,
    _args: ObjectAdapterTranslateArgs
  ): Promise<{ errors: any; parsed: any }> {
    throw new SchemaAdapterNotImplementedError({ className: this.constructor.name, functionName: 'parse' });
  }
}
