export interface ClassData {
  namespace?: string,
  name: string,
  types?: {name: string, extends?: string, default?: string}[],
  extends?: string,
  constructorMethod: ClassConstructor,
  properties: ClassProperties,
  methods: ClassMethods,
  events: ClassEvents,
}

export type ClassConstructor = { config: ClassMethodArgument[] };
export type ClassMethodArgument = { name: string, type: string[], comment: string };

export type ClassProperties = ClassProperty[];

export interface ClassProperty {
  name: string,
  static?: boolean,
  type: string[],
  comment: string,
  visibility: VisibilityTypes,
}

export type ClassMethods = ClassMethod[];

export interface ClassMethod {
  name: string,
  static?: boolean,
  returnType: string[],
  visibility: VisibilityTypes,
  arguments: ClassMethodArgument[],
  overloads?: {
    resultType: string,
    arguments: ClassMethodArgument[],
  }[]
}

export type ClassEvents = ClassEvent[];

export interface ClassEvent {
  name: string,
  arguments: ClassMethodArgument[],
}


export interface ExtClassData {
  name: string,
  extends: string,
  html: string,
  members: ExtClassMember[],
}

export interface ExtClassMember {
  meta: { private?: boolean, protected?: boolean, static?: boolean, chainable?: boolean },
  tagname: MemberTypes,
  owner: string,
  name: string,
  id: string,
}

export enum MemberTypes {
  CONFIG = 'cfg',
  PROPERTY = 'property',
  METHOD = 'method',
  EVENT = 'event',
}

export enum VisibilityTypes {
  PUBLIC = 'public',
  PROTECTED = 'protected',
  PRIVATE = 'private',
}
