
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model alunos
 * 
 */
export type alunos = $Result.DefaultSelection<Prisma.$alunosPayload>
/**
 * Model professores
 * 
 */
export type professores = $Result.DefaultSelection<Prisma.$professoresPayload>
/**
 * Model cursos
 * 
 */
export type cursos = $Result.DefaultSelection<Prisma.$cursosPayload>
/**
 * Model aulas
 * 
 */
export type aulas = $Result.DefaultSelection<Prisma.$aulasPayload>
/**
 * Model aulas_conteudo
 * 
 */
export type aulas_conteudo = $Result.DefaultSelection<Prisma.$aulas_conteudoPayload>
/**
 * Model relation_curso_aulas
 * 
 */
export type relation_curso_aulas = $Result.DefaultSelection<Prisma.$relation_curso_aulasPayload>
/**
 * Model relation_aluno_curso
 * 
 */
export type relation_aluno_curso = $Result.DefaultSelection<Prisma.$relation_aluno_cursoPayload>
/**
 * Model progress_curso_aulas
 * 
 */
export type progress_curso_aulas = $Result.DefaultSelection<Prisma.$progress_curso_aulasPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const StatusEnum: {
  nao_iniciado: 'nao_iniciado',
  em_andamento: 'em_andamento',
  finalizado: 'finalizado',
  aprovado: 'aprovado'
};

export type StatusEnum = (typeof StatusEnum)[keyof typeof StatusEnum]

}

export type StatusEnum = $Enums.StatusEnum

export const StatusEnum: typeof $Enums.StatusEnum

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Alunos
 * const alunos = await prisma.alunos.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Alunos
   * const alunos = await prisma.alunos.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.alunos`: Exposes CRUD operations for the **alunos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alunos
    * const alunos = await prisma.alunos.findMany()
    * ```
    */
  get alunos(): Prisma.alunosDelegate<ExtArgs>;

  /**
   * `prisma.professores`: Exposes CRUD operations for the **professores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Professores
    * const professores = await prisma.professores.findMany()
    * ```
    */
  get professores(): Prisma.professoresDelegate<ExtArgs>;

  /**
   * `prisma.cursos`: Exposes CRUD operations for the **cursos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cursos
    * const cursos = await prisma.cursos.findMany()
    * ```
    */
  get cursos(): Prisma.cursosDelegate<ExtArgs>;

  /**
   * `prisma.aulas`: Exposes CRUD operations for the **aulas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Aulas
    * const aulas = await prisma.aulas.findMany()
    * ```
    */
  get aulas(): Prisma.aulasDelegate<ExtArgs>;

  /**
   * `prisma.aulas_conteudo`: Exposes CRUD operations for the **aulas_conteudo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Aulas_conteudos
    * const aulas_conteudos = await prisma.aulas_conteudo.findMany()
    * ```
    */
  get aulas_conteudo(): Prisma.aulas_conteudoDelegate<ExtArgs>;

  /**
   * `prisma.relation_curso_aulas`: Exposes CRUD operations for the **relation_curso_aulas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Relation_curso_aulas
    * const relation_curso_aulas = await prisma.relation_curso_aulas.findMany()
    * ```
    */
  get relation_curso_aulas(): Prisma.relation_curso_aulasDelegate<ExtArgs>;

  /**
   * `prisma.relation_aluno_curso`: Exposes CRUD operations for the **relation_aluno_curso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Relation_aluno_cursos
    * const relation_aluno_cursos = await prisma.relation_aluno_curso.findMany()
    * ```
    */
  get relation_aluno_curso(): Prisma.relation_aluno_cursoDelegate<ExtArgs>;

  /**
   * `prisma.progress_curso_aulas`: Exposes CRUD operations for the **progress_curso_aulas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Progress_curso_aulas
    * const progress_curso_aulas = await prisma.progress_curso_aulas.findMany()
    * ```
    */
  get progress_curso_aulas(): Prisma.progress_curso_aulasDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.8.0
   * Query Engine version: 0a83d8541752d7582de2ebc1ece46519ce72a848
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    alunos: 'alunos',
    professores: 'professores',
    cursos: 'cursos',
    aulas: 'aulas',
    aulas_conteudo: 'aulas_conteudo',
    relation_curso_aulas: 'relation_curso_aulas',
    relation_aluno_curso: 'relation_aluno_curso',
    progress_curso_aulas: 'progress_curso_aulas'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'alunos' | 'professores' | 'cursos' | 'aulas' | 'aulas_conteudo' | 'relation_curso_aulas' | 'relation_aluno_curso' | 'progress_curso_aulas'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      alunos: {
        payload: Prisma.$alunosPayload<ExtArgs>
        fields: Prisma.alunosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.alunosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$alunosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.alunosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$alunosPayload>
          }
          findFirst: {
            args: Prisma.alunosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$alunosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.alunosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$alunosPayload>
          }
          findMany: {
            args: Prisma.alunosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$alunosPayload>[]
          }
          create: {
            args: Prisma.alunosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$alunosPayload>
          }
          createMany: {
            args: Prisma.alunosCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.alunosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$alunosPayload>
          }
          update: {
            args: Prisma.alunosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$alunosPayload>
          }
          deleteMany: {
            args: Prisma.alunosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.alunosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.alunosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$alunosPayload>
          }
          aggregate: {
            args: Prisma.AlunosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAlunos>
          }
          groupBy: {
            args: Prisma.alunosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AlunosGroupByOutputType>[]
          }
          count: {
            args: Prisma.alunosCountArgs<ExtArgs>,
            result: $Utils.Optional<AlunosCountAggregateOutputType> | number
          }
        }
      }
      professores: {
        payload: Prisma.$professoresPayload<ExtArgs>
        fields: Prisma.professoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.professoresFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$professoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.professoresFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$professoresPayload>
          }
          findFirst: {
            args: Prisma.professoresFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$professoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.professoresFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$professoresPayload>
          }
          findMany: {
            args: Prisma.professoresFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$professoresPayload>[]
          }
          create: {
            args: Prisma.professoresCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$professoresPayload>
          }
          createMany: {
            args: Prisma.professoresCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.professoresDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$professoresPayload>
          }
          update: {
            args: Prisma.professoresUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$professoresPayload>
          }
          deleteMany: {
            args: Prisma.professoresDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.professoresUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.professoresUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$professoresPayload>
          }
          aggregate: {
            args: Prisma.ProfessoresAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProfessores>
          }
          groupBy: {
            args: Prisma.professoresGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProfessoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.professoresCountArgs<ExtArgs>,
            result: $Utils.Optional<ProfessoresCountAggregateOutputType> | number
          }
        }
      }
      cursos: {
        payload: Prisma.$cursosPayload<ExtArgs>
        fields: Prisma.cursosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cursosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cursosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cursosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cursosPayload>
          }
          findFirst: {
            args: Prisma.cursosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cursosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cursosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cursosPayload>
          }
          findMany: {
            args: Prisma.cursosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cursosPayload>[]
          }
          create: {
            args: Prisma.cursosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cursosPayload>
          }
          createMany: {
            args: Prisma.cursosCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.cursosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cursosPayload>
          }
          update: {
            args: Prisma.cursosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cursosPayload>
          }
          deleteMany: {
            args: Prisma.cursosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.cursosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.cursosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cursosPayload>
          }
          aggregate: {
            args: Prisma.CursosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCursos>
          }
          groupBy: {
            args: Prisma.cursosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CursosGroupByOutputType>[]
          }
          count: {
            args: Prisma.cursosCountArgs<ExtArgs>,
            result: $Utils.Optional<CursosCountAggregateOutputType> | number
          }
        }
      }
      aulas: {
        payload: Prisma.$aulasPayload<ExtArgs>
        fields: Prisma.aulasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.aulasFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aulasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.aulasFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aulasPayload>
          }
          findFirst: {
            args: Prisma.aulasFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aulasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.aulasFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aulasPayload>
          }
          findMany: {
            args: Prisma.aulasFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aulasPayload>[]
          }
          create: {
            args: Prisma.aulasCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aulasPayload>
          }
          createMany: {
            args: Prisma.aulasCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.aulasDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aulasPayload>
          }
          update: {
            args: Prisma.aulasUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aulasPayload>
          }
          deleteMany: {
            args: Prisma.aulasDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.aulasUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.aulasUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aulasPayload>
          }
          aggregate: {
            args: Prisma.AulasAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAulas>
          }
          groupBy: {
            args: Prisma.aulasGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AulasGroupByOutputType>[]
          }
          count: {
            args: Prisma.aulasCountArgs<ExtArgs>,
            result: $Utils.Optional<AulasCountAggregateOutputType> | number
          }
        }
      }
      aulas_conteudo: {
        payload: Prisma.$aulas_conteudoPayload<ExtArgs>
        fields: Prisma.aulas_conteudoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.aulas_conteudoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aulas_conteudoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.aulas_conteudoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aulas_conteudoPayload>
          }
          findFirst: {
            args: Prisma.aulas_conteudoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aulas_conteudoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.aulas_conteudoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aulas_conteudoPayload>
          }
          findMany: {
            args: Prisma.aulas_conteudoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aulas_conteudoPayload>[]
          }
          create: {
            args: Prisma.aulas_conteudoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aulas_conteudoPayload>
          }
          createMany: {
            args: Prisma.aulas_conteudoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.aulas_conteudoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aulas_conteudoPayload>
          }
          update: {
            args: Prisma.aulas_conteudoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aulas_conteudoPayload>
          }
          deleteMany: {
            args: Prisma.aulas_conteudoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.aulas_conteudoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.aulas_conteudoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$aulas_conteudoPayload>
          }
          aggregate: {
            args: Prisma.Aulas_conteudoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAulas_conteudo>
          }
          groupBy: {
            args: Prisma.aulas_conteudoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Aulas_conteudoGroupByOutputType>[]
          }
          count: {
            args: Prisma.aulas_conteudoCountArgs<ExtArgs>,
            result: $Utils.Optional<Aulas_conteudoCountAggregateOutputType> | number
          }
        }
      }
      relation_curso_aulas: {
        payload: Prisma.$relation_curso_aulasPayload<ExtArgs>
        fields: Prisma.relation_curso_aulasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.relation_curso_aulasFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$relation_curso_aulasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.relation_curso_aulasFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$relation_curso_aulasPayload>
          }
          findFirst: {
            args: Prisma.relation_curso_aulasFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$relation_curso_aulasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.relation_curso_aulasFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$relation_curso_aulasPayload>
          }
          findMany: {
            args: Prisma.relation_curso_aulasFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$relation_curso_aulasPayload>[]
          }
          create: {
            args: Prisma.relation_curso_aulasCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$relation_curso_aulasPayload>
          }
          createMany: {
            args: Prisma.relation_curso_aulasCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.relation_curso_aulasDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$relation_curso_aulasPayload>
          }
          update: {
            args: Prisma.relation_curso_aulasUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$relation_curso_aulasPayload>
          }
          deleteMany: {
            args: Prisma.relation_curso_aulasDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.relation_curso_aulasUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.relation_curso_aulasUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$relation_curso_aulasPayload>
          }
          aggregate: {
            args: Prisma.Relation_curso_aulasAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRelation_curso_aulas>
          }
          groupBy: {
            args: Prisma.relation_curso_aulasGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Relation_curso_aulasGroupByOutputType>[]
          }
          count: {
            args: Prisma.relation_curso_aulasCountArgs<ExtArgs>,
            result: $Utils.Optional<Relation_curso_aulasCountAggregateOutputType> | number
          }
        }
      }
      relation_aluno_curso: {
        payload: Prisma.$relation_aluno_cursoPayload<ExtArgs>
        fields: Prisma.relation_aluno_cursoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.relation_aluno_cursoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$relation_aluno_cursoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.relation_aluno_cursoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$relation_aluno_cursoPayload>
          }
          findFirst: {
            args: Prisma.relation_aluno_cursoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$relation_aluno_cursoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.relation_aluno_cursoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$relation_aluno_cursoPayload>
          }
          findMany: {
            args: Prisma.relation_aluno_cursoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$relation_aluno_cursoPayload>[]
          }
          create: {
            args: Prisma.relation_aluno_cursoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$relation_aluno_cursoPayload>
          }
          createMany: {
            args: Prisma.relation_aluno_cursoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.relation_aluno_cursoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$relation_aluno_cursoPayload>
          }
          update: {
            args: Prisma.relation_aluno_cursoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$relation_aluno_cursoPayload>
          }
          deleteMany: {
            args: Prisma.relation_aluno_cursoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.relation_aluno_cursoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.relation_aluno_cursoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$relation_aluno_cursoPayload>
          }
          aggregate: {
            args: Prisma.Relation_aluno_cursoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRelation_aluno_curso>
          }
          groupBy: {
            args: Prisma.relation_aluno_cursoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Relation_aluno_cursoGroupByOutputType>[]
          }
          count: {
            args: Prisma.relation_aluno_cursoCountArgs<ExtArgs>,
            result: $Utils.Optional<Relation_aluno_cursoCountAggregateOutputType> | number
          }
        }
      }
      progress_curso_aulas: {
        payload: Prisma.$progress_curso_aulasPayload<ExtArgs>
        fields: Prisma.progress_curso_aulasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.progress_curso_aulasFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$progress_curso_aulasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.progress_curso_aulasFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$progress_curso_aulasPayload>
          }
          findFirst: {
            args: Prisma.progress_curso_aulasFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$progress_curso_aulasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.progress_curso_aulasFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$progress_curso_aulasPayload>
          }
          findMany: {
            args: Prisma.progress_curso_aulasFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$progress_curso_aulasPayload>[]
          }
          create: {
            args: Prisma.progress_curso_aulasCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$progress_curso_aulasPayload>
          }
          createMany: {
            args: Prisma.progress_curso_aulasCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.progress_curso_aulasDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$progress_curso_aulasPayload>
          }
          update: {
            args: Prisma.progress_curso_aulasUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$progress_curso_aulasPayload>
          }
          deleteMany: {
            args: Prisma.progress_curso_aulasDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.progress_curso_aulasUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.progress_curso_aulasUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$progress_curso_aulasPayload>
          }
          aggregate: {
            args: Prisma.Progress_curso_aulasAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProgress_curso_aulas>
          }
          groupBy: {
            args: Prisma.progress_curso_aulasGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Progress_curso_aulasGroupByOutputType>[]
          }
          count: {
            args: Prisma.progress_curso_aulasCountArgs<ExtArgs>,
            result: $Utils.Optional<Progress_curso_aulasCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model alunos
   */

  export type AggregateAlunos = {
    _count: AlunosCountAggregateOutputType | null
    _min: AlunosMinAggregateOutputType | null
    _max: AlunosMaxAggregateOutputType | null
  }

  export type AlunosMinAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    senha: string | null
    is_active: boolean | null
    userType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlunosMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    senha: string | null
    is_active: boolean | null
    userType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlunosCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    is_active: number
    userType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AlunosMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    is_active?: true
    userType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlunosMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    is_active?: true
    userType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlunosCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    is_active?: true
    userType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AlunosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which alunos to aggregate.
     */
    where?: alunosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alunos to fetch.
     */
    orderBy?: alunosOrderByWithRelationInput | alunosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: alunosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned alunos
    **/
    _count?: true | AlunosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlunosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlunosMaxAggregateInputType
  }

  export type GetAlunosAggregateType<T extends AlunosAggregateArgs> = {
        [P in keyof T & keyof AggregateAlunos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlunos[P]>
      : GetScalarType<T[P], AggregateAlunos[P]>
  }




  export type alunosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: alunosWhereInput
    orderBy?: alunosOrderByWithAggregationInput | alunosOrderByWithAggregationInput[]
    by: AlunosScalarFieldEnum[] | AlunosScalarFieldEnum
    having?: alunosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlunosCountAggregateInputType | true
    _min?: AlunosMinAggregateInputType
    _max?: AlunosMaxAggregateInputType
  }

  export type AlunosGroupByOutputType = {
    id: string
    nome: string
    email: string
    senha: string
    is_active: boolean
    userType: string
    createdAt: Date
    updatedAt: Date
    _count: AlunosCountAggregateOutputType | null
    _min: AlunosMinAggregateOutputType | null
    _max: AlunosMaxAggregateOutputType | null
  }

  type GetAlunosGroupByPayload<T extends alunosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlunosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlunosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlunosGroupByOutputType[P]>
            : GetScalarType<T[P], AlunosGroupByOutputType[P]>
        }
      >
    >


  export type alunosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    is_active?: boolean
    userType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["alunos"]>

  export type alunosSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    is_active?: boolean
    userType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $alunosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "alunos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      email: string
      senha: string
      is_active: boolean
      userType: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["alunos"]>
    composites: {}
  }


  type alunosGetPayload<S extends boolean | null | undefined | alunosDefaultArgs> = $Result.GetResult<Prisma.$alunosPayload, S>

  type alunosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<alunosFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AlunosCountAggregateInputType | true
    }

  export interface alunosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['alunos'], meta: { name: 'alunos' } }
    /**
     * Find zero or one Alunos that matches the filter.
     * @param {alunosFindUniqueArgs} args - Arguments to find a Alunos
     * @example
     * // Get one Alunos
     * const alunos = await prisma.alunos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends alunosFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, alunosFindUniqueArgs<ExtArgs>>
    ): Prisma__alunosClient<$Result.GetResult<Prisma.$alunosPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Alunos that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {alunosFindUniqueOrThrowArgs} args - Arguments to find a Alunos
     * @example
     * // Get one Alunos
     * const alunos = await prisma.alunos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends alunosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, alunosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__alunosClient<$Result.GetResult<Prisma.$alunosPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Alunos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alunosFindFirstArgs} args - Arguments to find a Alunos
     * @example
     * // Get one Alunos
     * const alunos = await prisma.alunos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends alunosFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, alunosFindFirstArgs<ExtArgs>>
    ): Prisma__alunosClient<$Result.GetResult<Prisma.$alunosPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Alunos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alunosFindFirstOrThrowArgs} args - Arguments to find a Alunos
     * @example
     * // Get one Alunos
     * const alunos = await prisma.alunos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends alunosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, alunosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__alunosClient<$Result.GetResult<Prisma.$alunosPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Alunos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alunosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alunos
     * const alunos = await prisma.alunos.findMany()
     * 
     * // Get first 10 Alunos
     * const alunos = await prisma.alunos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alunosWithIdOnly = await prisma.alunos.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends alunosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, alunosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alunosPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Alunos.
     * @param {alunosCreateArgs} args - Arguments to create a Alunos.
     * @example
     * // Create one Alunos
     * const Alunos = await prisma.alunos.create({
     *   data: {
     *     // ... data to create a Alunos
     *   }
     * })
     * 
    **/
    create<T extends alunosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, alunosCreateArgs<ExtArgs>>
    ): Prisma__alunosClient<$Result.GetResult<Prisma.$alunosPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Alunos.
     *     @param {alunosCreateManyArgs} args - Arguments to create many Alunos.
     *     @example
     *     // Create many Alunos
     *     const alunos = await prisma.alunos.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends alunosCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, alunosCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Alunos.
     * @param {alunosDeleteArgs} args - Arguments to delete one Alunos.
     * @example
     * // Delete one Alunos
     * const Alunos = await prisma.alunos.delete({
     *   where: {
     *     // ... filter to delete one Alunos
     *   }
     * })
     * 
    **/
    delete<T extends alunosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, alunosDeleteArgs<ExtArgs>>
    ): Prisma__alunosClient<$Result.GetResult<Prisma.$alunosPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Alunos.
     * @param {alunosUpdateArgs} args - Arguments to update one Alunos.
     * @example
     * // Update one Alunos
     * const alunos = await prisma.alunos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends alunosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, alunosUpdateArgs<ExtArgs>>
    ): Prisma__alunosClient<$Result.GetResult<Prisma.$alunosPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Alunos.
     * @param {alunosDeleteManyArgs} args - Arguments to filter Alunos to delete.
     * @example
     * // Delete a few Alunos
     * const { count } = await prisma.alunos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends alunosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, alunosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alunos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alunosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alunos
     * const alunos = await prisma.alunos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends alunosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, alunosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Alunos.
     * @param {alunosUpsertArgs} args - Arguments to update or create a Alunos.
     * @example
     * // Update or create a Alunos
     * const alunos = await prisma.alunos.upsert({
     *   create: {
     *     // ... data to create a Alunos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alunos we want to update
     *   }
     * })
    **/
    upsert<T extends alunosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, alunosUpsertArgs<ExtArgs>>
    ): Prisma__alunosClient<$Result.GetResult<Prisma.$alunosPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Alunos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alunosCountArgs} args - Arguments to filter Alunos to count.
     * @example
     * // Count the number of Alunos
     * const count = await prisma.alunos.count({
     *   where: {
     *     // ... the filter for the Alunos we want to count
     *   }
     * })
    **/
    count<T extends alunosCountArgs>(
      args?: Subset<T, alunosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlunosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alunos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlunosAggregateArgs>(args: Subset<T, AlunosAggregateArgs>): Prisma.PrismaPromise<GetAlunosAggregateType<T>>

    /**
     * Group by Alunos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alunosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends alunosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: alunosGroupByArgs['orderBy'] }
        : { orderBy?: alunosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, alunosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlunosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the alunos model
   */
  readonly fields: alunosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for alunos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__alunosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the alunos model
   */ 
  interface alunosFieldRefs {
    readonly id: FieldRef<"alunos", 'String'>
    readonly nome: FieldRef<"alunos", 'String'>
    readonly email: FieldRef<"alunos", 'String'>
    readonly senha: FieldRef<"alunos", 'String'>
    readonly is_active: FieldRef<"alunos", 'Boolean'>
    readonly userType: FieldRef<"alunos", 'String'>
    readonly createdAt: FieldRef<"alunos", 'DateTime'>
    readonly updatedAt: FieldRef<"alunos", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * alunos findUnique
   */
  export type alunosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alunos
     */
    select?: alunosSelect<ExtArgs> | null
    /**
     * Filter, which alunos to fetch.
     */
    where: alunosWhereUniqueInput
  }


  /**
   * alunos findUniqueOrThrow
   */
  export type alunosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alunos
     */
    select?: alunosSelect<ExtArgs> | null
    /**
     * Filter, which alunos to fetch.
     */
    where: alunosWhereUniqueInput
  }


  /**
   * alunos findFirst
   */
  export type alunosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alunos
     */
    select?: alunosSelect<ExtArgs> | null
    /**
     * Filter, which alunos to fetch.
     */
    where?: alunosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alunos to fetch.
     */
    orderBy?: alunosOrderByWithRelationInput | alunosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for alunos.
     */
    cursor?: alunosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of alunos.
     */
    distinct?: AlunosScalarFieldEnum | AlunosScalarFieldEnum[]
  }


  /**
   * alunos findFirstOrThrow
   */
  export type alunosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alunos
     */
    select?: alunosSelect<ExtArgs> | null
    /**
     * Filter, which alunos to fetch.
     */
    where?: alunosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alunos to fetch.
     */
    orderBy?: alunosOrderByWithRelationInput | alunosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for alunos.
     */
    cursor?: alunosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of alunos.
     */
    distinct?: AlunosScalarFieldEnum | AlunosScalarFieldEnum[]
  }


  /**
   * alunos findMany
   */
  export type alunosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alunos
     */
    select?: alunosSelect<ExtArgs> | null
    /**
     * Filter, which alunos to fetch.
     */
    where?: alunosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alunos to fetch.
     */
    orderBy?: alunosOrderByWithRelationInput | alunosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing alunos.
     */
    cursor?: alunosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alunos.
     */
    skip?: number
    distinct?: AlunosScalarFieldEnum | AlunosScalarFieldEnum[]
  }


  /**
   * alunos create
   */
  export type alunosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alunos
     */
    select?: alunosSelect<ExtArgs> | null
    /**
     * The data needed to create a alunos.
     */
    data: XOR<alunosCreateInput, alunosUncheckedCreateInput>
  }


  /**
   * alunos createMany
   */
  export type alunosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many alunos.
     */
    data: alunosCreateManyInput | alunosCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * alunos update
   */
  export type alunosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alunos
     */
    select?: alunosSelect<ExtArgs> | null
    /**
     * The data needed to update a alunos.
     */
    data: XOR<alunosUpdateInput, alunosUncheckedUpdateInput>
    /**
     * Choose, which alunos to update.
     */
    where: alunosWhereUniqueInput
  }


  /**
   * alunos updateMany
   */
  export type alunosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update alunos.
     */
    data: XOR<alunosUpdateManyMutationInput, alunosUncheckedUpdateManyInput>
    /**
     * Filter which alunos to update
     */
    where?: alunosWhereInput
  }


  /**
   * alunos upsert
   */
  export type alunosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alunos
     */
    select?: alunosSelect<ExtArgs> | null
    /**
     * The filter to search for the alunos to update in case it exists.
     */
    where: alunosWhereUniqueInput
    /**
     * In case the alunos found by the `where` argument doesn't exist, create a new alunos with this data.
     */
    create: XOR<alunosCreateInput, alunosUncheckedCreateInput>
    /**
     * In case the alunos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<alunosUpdateInput, alunosUncheckedUpdateInput>
  }


  /**
   * alunos delete
   */
  export type alunosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alunos
     */
    select?: alunosSelect<ExtArgs> | null
    /**
     * Filter which alunos to delete.
     */
    where: alunosWhereUniqueInput
  }


  /**
   * alunos deleteMany
   */
  export type alunosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which alunos to delete
     */
    where?: alunosWhereInput
  }


  /**
   * alunos without action
   */
  export type alunosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alunos
     */
    select?: alunosSelect<ExtArgs> | null
  }



  /**
   * Model professores
   */

  export type AggregateProfessores = {
    _count: ProfessoresCountAggregateOutputType | null
    _min: ProfessoresMinAggregateOutputType | null
    _max: ProfessoresMaxAggregateOutputType | null
  }

  export type ProfessoresMinAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    senha: string | null
    is_active: boolean | null
    userType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfessoresMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    senha: string | null
    is_active: boolean | null
    userType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfessoresCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    is_active: number
    userType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfessoresMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    is_active?: true
    userType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfessoresMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    is_active?: true
    userType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfessoresCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    is_active?: true
    userType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfessoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which professores to aggregate.
     */
    where?: professoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of professores to fetch.
     */
    orderBy?: professoresOrderByWithRelationInput | professoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: professoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` professores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` professores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned professores
    **/
    _count?: true | ProfessoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessoresMaxAggregateInputType
  }

  export type GetProfessoresAggregateType<T extends ProfessoresAggregateArgs> = {
        [P in keyof T & keyof AggregateProfessores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfessores[P]>
      : GetScalarType<T[P], AggregateProfessores[P]>
  }




  export type professoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: professoresWhereInput
    orderBy?: professoresOrderByWithAggregationInput | professoresOrderByWithAggregationInput[]
    by: ProfessoresScalarFieldEnum[] | ProfessoresScalarFieldEnum
    having?: professoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessoresCountAggregateInputType | true
    _min?: ProfessoresMinAggregateInputType
    _max?: ProfessoresMaxAggregateInputType
  }

  export type ProfessoresGroupByOutputType = {
    id: string
    nome: string
    email: string
    senha: string
    is_active: boolean
    userType: string
    createdAt: Date
    updatedAt: Date
    _count: ProfessoresCountAggregateOutputType | null
    _min: ProfessoresMinAggregateOutputType | null
    _max: ProfessoresMaxAggregateOutputType | null
  }

  type GetProfessoresGroupByPayload<T extends professoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessoresGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessoresGroupByOutputType[P]>
        }
      >
    >


  export type professoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    is_active?: boolean
    userType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["professores"]>

  export type professoresSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    is_active?: boolean
    userType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $professoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "professores"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      email: string
      senha: string
      is_active: boolean
      userType: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["professores"]>
    composites: {}
  }


  type professoresGetPayload<S extends boolean | null | undefined | professoresDefaultArgs> = $Result.GetResult<Prisma.$professoresPayload, S>

  type professoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<professoresFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProfessoresCountAggregateInputType | true
    }

  export interface professoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['professores'], meta: { name: 'professores' } }
    /**
     * Find zero or one Professores that matches the filter.
     * @param {professoresFindUniqueArgs} args - Arguments to find a Professores
     * @example
     * // Get one Professores
     * const professores = await prisma.professores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends professoresFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, professoresFindUniqueArgs<ExtArgs>>
    ): Prisma__professoresClient<$Result.GetResult<Prisma.$professoresPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Professores that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {professoresFindUniqueOrThrowArgs} args - Arguments to find a Professores
     * @example
     * // Get one Professores
     * const professores = await prisma.professores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends professoresFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, professoresFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__professoresClient<$Result.GetResult<Prisma.$professoresPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Professores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professoresFindFirstArgs} args - Arguments to find a Professores
     * @example
     * // Get one Professores
     * const professores = await prisma.professores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends professoresFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, professoresFindFirstArgs<ExtArgs>>
    ): Prisma__professoresClient<$Result.GetResult<Prisma.$professoresPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Professores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professoresFindFirstOrThrowArgs} args - Arguments to find a Professores
     * @example
     * // Get one Professores
     * const professores = await prisma.professores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends professoresFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, professoresFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__professoresClient<$Result.GetResult<Prisma.$professoresPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Professores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professoresFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Professores
     * const professores = await prisma.professores.findMany()
     * 
     * // Get first 10 Professores
     * const professores = await prisma.professores.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const professoresWithIdOnly = await prisma.professores.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends professoresFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, professoresFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$professoresPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Professores.
     * @param {professoresCreateArgs} args - Arguments to create a Professores.
     * @example
     * // Create one Professores
     * const Professores = await prisma.professores.create({
     *   data: {
     *     // ... data to create a Professores
     *   }
     * })
     * 
    **/
    create<T extends professoresCreateArgs<ExtArgs>>(
      args: SelectSubset<T, professoresCreateArgs<ExtArgs>>
    ): Prisma__professoresClient<$Result.GetResult<Prisma.$professoresPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Professores.
     *     @param {professoresCreateManyArgs} args - Arguments to create many Professores.
     *     @example
     *     // Create many Professores
     *     const professores = await prisma.professores.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends professoresCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, professoresCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Professores.
     * @param {professoresDeleteArgs} args - Arguments to delete one Professores.
     * @example
     * // Delete one Professores
     * const Professores = await prisma.professores.delete({
     *   where: {
     *     // ... filter to delete one Professores
     *   }
     * })
     * 
    **/
    delete<T extends professoresDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, professoresDeleteArgs<ExtArgs>>
    ): Prisma__professoresClient<$Result.GetResult<Prisma.$professoresPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Professores.
     * @param {professoresUpdateArgs} args - Arguments to update one Professores.
     * @example
     * // Update one Professores
     * const professores = await prisma.professores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends professoresUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, professoresUpdateArgs<ExtArgs>>
    ): Prisma__professoresClient<$Result.GetResult<Prisma.$professoresPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Professores.
     * @param {professoresDeleteManyArgs} args - Arguments to filter Professores to delete.
     * @example
     * // Delete a few Professores
     * const { count } = await prisma.professores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends professoresDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, professoresDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Professores
     * const professores = await prisma.professores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends professoresUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, professoresUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Professores.
     * @param {professoresUpsertArgs} args - Arguments to update or create a Professores.
     * @example
     * // Update or create a Professores
     * const professores = await prisma.professores.upsert({
     *   create: {
     *     // ... data to create a Professores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Professores we want to update
     *   }
     * })
    **/
    upsert<T extends professoresUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, professoresUpsertArgs<ExtArgs>>
    ): Prisma__professoresClient<$Result.GetResult<Prisma.$professoresPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Professores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professoresCountArgs} args - Arguments to filter Professores to count.
     * @example
     * // Count the number of Professores
     * const count = await prisma.professores.count({
     *   where: {
     *     // ... the filter for the Professores we want to count
     *   }
     * })
    **/
    count<T extends professoresCountArgs>(
      args?: Subset<T, professoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Professores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfessoresAggregateArgs>(args: Subset<T, ProfessoresAggregateArgs>): Prisma.PrismaPromise<GetProfessoresAggregateType<T>>

    /**
     * Group by Professores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professoresGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends professoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: professoresGroupByArgs['orderBy'] }
        : { orderBy?: professoresGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, professoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the professores model
   */
  readonly fields: professoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for professores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__professoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the professores model
   */ 
  interface professoresFieldRefs {
    readonly id: FieldRef<"professores", 'String'>
    readonly nome: FieldRef<"professores", 'String'>
    readonly email: FieldRef<"professores", 'String'>
    readonly senha: FieldRef<"professores", 'String'>
    readonly is_active: FieldRef<"professores", 'Boolean'>
    readonly userType: FieldRef<"professores", 'String'>
    readonly createdAt: FieldRef<"professores", 'DateTime'>
    readonly updatedAt: FieldRef<"professores", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * professores findUnique
   */
  export type professoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professores
     */
    select?: professoresSelect<ExtArgs> | null
    /**
     * Filter, which professores to fetch.
     */
    where: professoresWhereUniqueInput
  }


  /**
   * professores findUniqueOrThrow
   */
  export type professoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professores
     */
    select?: professoresSelect<ExtArgs> | null
    /**
     * Filter, which professores to fetch.
     */
    where: professoresWhereUniqueInput
  }


  /**
   * professores findFirst
   */
  export type professoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professores
     */
    select?: professoresSelect<ExtArgs> | null
    /**
     * Filter, which professores to fetch.
     */
    where?: professoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of professores to fetch.
     */
    orderBy?: professoresOrderByWithRelationInput | professoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for professores.
     */
    cursor?: professoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` professores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` professores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of professores.
     */
    distinct?: ProfessoresScalarFieldEnum | ProfessoresScalarFieldEnum[]
  }


  /**
   * professores findFirstOrThrow
   */
  export type professoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professores
     */
    select?: professoresSelect<ExtArgs> | null
    /**
     * Filter, which professores to fetch.
     */
    where?: professoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of professores to fetch.
     */
    orderBy?: professoresOrderByWithRelationInput | professoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for professores.
     */
    cursor?: professoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` professores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` professores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of professores.
     */
    distinct?: ProfessoresScalarFieldEnum | ProfessoresScalarFieldEnum[]
  }


  /**
   * professores findMany
   */
  export type professoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professores
     */
    select?: professoresSelect<ExtArgs> | null
    /**
     * Filter, which professores to fetch.
     */
    where?: professoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of professores to fetch.
     */
    orderBy?: professoresOrderByWithRelationInput | professoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing professores.
     */
    cursor?: professoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` professores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` professores.
     */
    skip?: number
    distinct?: ProfessoresScalarFieldEnum | ProfessoresScalarFieldEnum[]
  }


  /**
   * professores create
   */
  export type professoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professores
     */
    select?: professoresSelect<ExtArgs> | null
    /**
     * The data needed to create a professores.
     */
    data: XOR<professoresCreateInput, professoresUncheckedCreateInput>
  }


  /**
   * professores createMany
   */
  export type professoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many professores.
     */
    data: professoresCreateManyInput | professoresCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * professores update
   */
  export type professoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professores
     */
    select?: professoresSelect<ExtArgs> | null
    /**
     * The data needed to update a professores.
     */
    data: XOR<professoresUpdateInput, professoresUncheckedUpdateInput>
    /**
     * Choose, which professores to update.
     */
    where: professoresWhereUniqueInput
  }


  /**
   * professores updateMany
   */
  export type professoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update professores.
     */
    data: XOR<professoresUpdateManyMutationInput, professoresUncheckedUpdateManyInput>
    /**
     * Filter which professores to update
     */
    where?: professoresWhereInput
  }


  /**
   * professores upsert
   */
  export type professoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professores
     */
    select?: professoresSelect<ExtArgs> | null
    /**
     * The filter to search for the professores to update in case it exists.
     */
    where: professoresWhereUniqueInput
    /**
     * In case the professores found by the `where` argument doesn't exist, create a new professores with this data.
     */
    create: XOR<professoresCreateInput, professoresUncheckedCreateInput>
    /**
     * In case the professores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<professoresUpdateInput, professoresUncheckedUpdateInput>
  }


  /**
   * professores delete
   */
  export type professoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professores
     */
    select?: professoresSelect<ExtArgs> | null
    /**
     * Filter which professores to delete.
     */
    where: professoresWhereUniqueInput
  }


  /**
   * professores deleteMany
   */
  export type professoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which professores to delete
     */
    where?: professoresWhereInput
  }


  /**
   * professores without action
   */
  export type professoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the professores
     */
    select?: professoresSelect<ExtArgs> | null
  }



  /**
   * Model cursos
   */

  export type AggregateCursos = {
    _count: CursosCountAggregateOutputType | null
    _min: CursosMinAggregateOutputType | null
    _max: CursosMaxAggregateOutputType | null
  }

  export type CursosMinAggregateOutputType = {
    id: string | null
    nome: string | null
    descricao: string | null
    banner: string | null
    is_active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CursosMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    descricao: string | null
    banner: string | null
    is_active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CursosCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    banner: number
    is_active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CursosMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    banner?: true
    is_active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CursosMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    banner?: true
    is_active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CursosCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    banner?: true
    is_active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CursosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cursos to aggregate.
     */
    where?: cursosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cursos to fetch.
     */
    orderBy?: cursosOrderByWithRelationInput | cursosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cursosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cursos
    **/
    _count?: true | CursosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CursosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CursosMaxAggregateInputType
  }

  export type GetCursosAggregateType<T extends CursosAggregateArgs> = {
        [P in keyof T & keyof AggregateCursos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCursos[P]>
      : GetScalarType<T[P], AggregateCursos[P]>
  }




  export type cursosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cursosWhereInput
    orderBy?: cursosOrderByWithAggregationInput | cursosOrderByWithAggregationInput[]
    by: CursosScalarFieldEnum[] | CursosScalarFieldEnum
    having?: cursosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CursosCountAggregateInputType | true
    _min?: CursosMinAggregateInputType
    _max?: CursosMaxAggregateInputType
  }

  export type CursosGroupByOutputType = {
    id: string
    nome: string
    descricao: string
    banner: string
    is_active: boolean
    createdAt: Date
    updatedAt: Date
    _count: CursosCountAggregateOutputType | null
    _min: CursosMinAggregateOutputType | null
    _max: CursosMaxAggregateOutputType | null
  }

  type GetCursosGroupByPayload<T extends cursosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CursosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CursosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CursosGroupByOutputType[P]>
            : GetScalarType<T[P], CursosGroupByOutputType[P]>
        }
      >
    >


  export type cursosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    banner?: boolean
    is_active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cursos"]>

  export type cursosSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    banner?: boolean
    is_active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $cursosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cursos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      descricao: string
      banner: string
      is_active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cursos"]>
    composites: {}
  }


  type cursosGetPayload<S extends boolean | null | undefined | cursosDefaultArgs> = $Result.GetResult<Prisma.$cursosPayload, S>

  type cursosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<cursosFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CursosCountAggregateInputType | true
    }

  export interface cursosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cursos'], meta: { name: 'cursos' } }
    /**
     * Find zero or one Cursos that matches the filter.
     * @param {cursosFindUniqueArgs} args - Arguments to find a Cursos
     * @example
     * // Get one Cursos
     * const cursos = await prisma.cursos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends cursosFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, cursosFindUniqueArgs<ExtArgs>>
    ): Prisma__cursosClient<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Cursos that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {cursosFindUniqueOrThrowArgs} args - Arguments to find a Cursos
     * @example
     * // Get one Cursos
     * const cursos = await prisma.cursos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends cursosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cursosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__cursosClient<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Cursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursosFindFirstArgs} args - Arguments to find a Cursos
     * @example
     * // Get one Cursos
     * const cursos = await prisma.cursos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends cursosFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, cursosFindFirstArgs<ExtArgs>>
    ): Prisma__cursosClient<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Cursos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursosFindFirstOrThrowArgs} args - Arguments to find a Cursos
     * @example
     * // Get one Cursos
     * const cursos = await prisma.cursos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends cursosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cursosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__cursosClient<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Cursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cursos
     * const cursos = await prisma.cursos.findMany()
     * 
     * // Get first 10 Cursos
     * const cursos = await prisma.cursos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cursosWithIdOnly = await prisma.cursos.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends cursosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cursosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Cursos.
     * @param {cursosCreateArgs} args - Arguments to create a Cursos.
     * @example
     * // Create one Cursos
     * const Cursos = await prisma.cursos.create({
     *   data: {
     *     // ... data to create a Cursos
     *   }
     * })
     * 
    **/
    create<T extends cursosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, cursosCreateArgs<ExtArgs>>
    ): Prisma__cursosClient<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Cursos.
     *     @param {cursosCreateManyArgs} args - Arguments to create many Cursos.
     *     @example
     *     // Create many Cursos
     *     const cursos = await prisma.cursos.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends cursosCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cursosCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cursos.
     * @param {cursosDeleteArgs} args - Arguments to delete one Cursos.
     * @example
     * // Delete one Cursos
     * const Cursos = await prisma.cursos.delete({
     *   where: {
     *     // ... filter to delete one Cursos
     *   }
     * })
     * 
    **/
    delete<T extends cursosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, cursosDeleteArgs<ExtArgs>>
    ): Prisma__cursosClient<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Cursos.
     * @param {cursosUpdateArgs} args - Arguments to update one Cursos.
     * @example
     * // Update one Cursos
     * const cursos = await prisma.cursos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends cursosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, cursosUpdateArgs<ExtArgs>>
    ): Prisma__cursosClient<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Cursos.
     * @param {cursosDeleteManyArgs} args - Arguments to filter Cursos to delete.
     * @example
     * // Delete a few Cursos
     * const { count } = await prisma.cursos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends cursosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cursosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cursos
     * const cursos = await prisma.cursos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends cursosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, cursosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cursos.
     * @param {cursosUpsertArgs} args - Arguments to update or create a Cursos.
     * @example
     * // Update or create a Cursos
     * const cursos = await prisma.cursos.upsert({
     *   create: {
     *     // ... data to create a Cursos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cursos we want to update
     *   }
     * })
    **/
    upsert<T extends cursosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, cursosUpsertArgs<ExtArgs>>
    ): Prisma__cursosClient<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursosCountArgs} args - Arguments to filter Cursos to count.
     * @example
     * // Count the number of Cursos
     * const count = await prisma.cursos.count({
     *   where: {
     *     // ... the filter for the Cursos we want to count
     *   }
     * })
    **/
    count<T extends cursosCountArgs>(
      args?: Subset<T, cursosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CursosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CursosAggregateArgs>(args: Subset<T, CursosAggregateArgs>): Prisma.PrismaPromise<GetCursosAggregateType<T>>

    /**
     * Group by Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cursosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cursosGroupByArgs['orderBy'] }
        : { orderBy?: cursosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cursosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCursosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cursos model
   */
  readonly fields: cursosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cursos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cursosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the cursos model
   */ 
  interface cursosFieldRefs {
    readonly id: FieldRef<"cursos", 'String'>
    readonly nome: FieldRef<"cursos", 'String'>
    readonly descricao: FieldRef<"cursos", 'String'>
    readonly banner: FieldRef<"cursos", 'String'>
    readonly is_active: FieldRef<"cursos", 'Boolean'>
    readonly createdAt: FieldRef<"cursos", 'DateTime'>
    readonly updatedAt: FieldRef<"cursos", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * cursos findUnique
   */
  export type cursosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelect<ExtArgs> | null
    /**
     * Filter, which cursos to fetch.
     */
    where: cursosWhereUniqueInput
  }


  /**
   * cursos findUniqueOrThrow
   */
  export type cursosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelect<ExtArgs> | null
    /**
     * Filter, which cursos to fetch.
     */
    where: cursosWhereUniqueInput
  }


  /**
   * cursos findFirst
   */
  export type cursosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelect<ExtArgs> | null
    /**
     * Filter, which cursos to fetch.
     */
    where?: cursosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cursos to fetch.
     */
    orderBy?: cursosOrderByWithRelationInput | cursosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cursos.
     */
    cursor?: cursosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cursos.
     */
    distinct?: CursosScalarFieldEnum | CursosScalarFieldEnum[]
  }


  /**
   * cursos findFirstOrThrow
   */
  export type cursosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelect<ExtArgs> | null
    /**
     * Filter, which cursos to fetch.
     */
    where?: cursosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cursos to fetch.
     */
    orderBy?: cursosOrderByWithRelationInput | cursosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cursos.
     */
    cursor?: cursosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cursos.
     */
    distinct?: CursosScalarFieldEnum | CursosScalarFieldEnum[]
  }


  /**
   * cursos findMany
   */
  export type cursosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelect<ExtArgs> | null
    /**
     * Filter, which cursos to fetch.
     */
    where?: cursosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cursos to fetch.
     */
    orderBy?: cursosOrderByWithRelationInput | cursosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cursos.
     */
    cursor?: cursosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cursos.
     */
    skip?: number
    distinct?: CursosScalarFieldEnum | CursosScalarFieldEnum[]
  }


  /**
   * cursos create
   */
  export type cursosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelect<ExtArgs> | null
    /**
     * The data needed to create a cursos.
     */
    data: XOR<cursosCreateInput, cursosUncheckedCreateInput>
  }


  /**
   * cursos createMany
   */
  export type cursosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cursos.
     */
    data: cursosCreateManyInput | cursosCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * cursos update
   */
  export type cursosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelect<ExtArgs> | null
    /**
     * The data needed to update a cursos.
     */
    data: XOR<cursosUpdateInput, cursosUncheckedUpdateInput>
    /**
     * Choose, which cursos to update.
     */
    where: cursosWhereUniqueInput
  }


  /**
   * cursos updateMany
   */
  export type cursosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cursos.
     */
    data: XOR<cursosUpdateManyMutationInput, cursosUncheckedUpdateManyInput>
    /**
     * Filter which cursos to update
     */
    where?: cursosWhereInput
  }


  /**
   * cursos upsert
   */
  export type cursosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelect<ExtArgs> | null
    /**
     * The filter to search for the cursos to update in case it exists.
     */
    where: cursosWhereUniqueInput
    /**
     * In case the cursos found by the `where` argument doesn't exist, create a new cursos with this data.
     */
    create: XOR<cursosCreateInput, cursosUncheckedCreateInput>
    /**
     * In case the cursos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cursosUpdateInput, cursosUncheckedUpdateInput>
  }


  /**
   * cursos delete
   */
  export type cursosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelect<ExtArgs> | null
    /**
     * Filter which cursos to delete.
     */
    where: cursosWhereUniqueInput
  }


  /**
   * cursos deleteMany
   */
  export type cursosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cursos to delete
     */
    where?: cursosWhereInput
  }


  /**
   * cursos without action
   */
  export type cursosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelect<ExtArgs> | null
  }



  /**
   * Model aulas
   */

  export type AggregateAulas = {
    _count: AulasCountAggregateOutputType | null
    _min: AulasMinAggregateOutputType | null
    _max: AulasMaxAggregateOutputType | null
  }

  export type AulasMinAggregateOutputType = {
    id: string | null
    nome: string | null
    descricao: string | null
    is_active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AulasMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    descricao: string | null
    is_active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AulasCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    is_active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AulasMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    is_active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AulasMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    is_active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AulasCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    is_active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AulasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which aulas to aggregate.
     */
    where?: aulasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aulas to fetch.
     */
    orderBy?: aulasOrderByWithRelationInput | aulasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: aulasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned aulas
    **/
    _count?: true | AulasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AulasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AulasMaxAggregateInputType
  }

  export type GetAulasAggregateType<T extends AulasAggregateArgs> = {
        [P in keyof T & keyof AggregateAulas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAulas[P]>
      : GetScalarType<T[P], AggregateAulas[P]>
  }




  export type aulasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: aulasWhereInput
    orderBy?: aulasOrderByWithAggregationInput | aulasOrderByWithAggregationInput[]
    by: AulasScalarFieldEnum[] | AulasScalarFieldEnum
    having?: aulasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AulasCountAggregateInputType | true
    _min?: AulasMinAggregateInputType
    _max?: AulasMaxAggregateInputType
  }

  export type AulasGroupByOutputType = {
    id: string
    nome: string
    descricao: string
    is_active: boolean
    createdAt: Date
    updatedAt: Date
    _count: AulasCountAggregateOutputType | null
    _min: AulasMinAggregateOutputType | null
    _max: AulasMaxAggregateOutputType | null
  }

  type GetAulasGroupByPayload<T extends aulasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AulasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AulasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AulasGroupByOutputType[P]>
            : GetScalarType<T[P], AulasGroupByOutputType[P]>
        }
      >
    >


  export type aulasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    is_active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aulas"]>

  export type aulasSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    is_active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $aulasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "aulas"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      descricao: string
      is_active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["aulas"]>
    composites: {}
  }


  type aulasGetPayload<S extends boolean | null | undefined | aulasDefaultArgs> = $Result.GetResult<Prisma.$aulasPayload, S>

  type aulasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<aulasFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AulasCountAggregateInputType | true
    }

  export interface aulasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['aulas'], meta: { name: 'aulas' } }
    /**
     * Find zero or one Aulas that matches the filter.
     * @param {aulasFindUniqueArgs} args - Arguments to find a Aulas
     * @example
     * // Get one Aulas
     * const aulas = await prisma.aulas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends aulasFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, aulasFindUniqueArgs<ExtArgs>>
    ): Prisma__aulasClient<$Result.GetResult<Prisma.$aulasPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Aulas that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {aulasFindUniqueOrThrowArgs} args - Arguments to find a Aulas
     * @example
     * // Get one Aulas
     * const aulas = await prisma.aulas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends aulasFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, aulasFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__aulasClient<$Result.GetResult<Prisma.$aulasPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Aulas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aulasFindFirstArgs} args - Arguments to find a Aulas
     * @example
     * // Get one Aulas
     * const aulas = await prisma.aulas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends aulasFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, aulasFindFirstArgs<ExtArgs>>
    ): Prisma__aulasClient<$Result.GetResult<Prisma.$aulasPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Aulas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aulasFindFirstOrThrowArgs} args - Arguments to find a Aulas
     * @example
     * // Get one Aulas
     * const aulas = await prisma.aulas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends aulasFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, aulasFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__aulasClient<$Result.GetResult<Prisma.$aulasPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Aulas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aulasFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Aulas
     * const aulas = await prisma.aulas.findMany()
     * 
     * // Get first 10 Aulas
     * const aulas = await prisma.aulas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aulasWithIdOnly = await prisma.aulas.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends aulasFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, aulasFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$aulasPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Aulas.
     * @param {aulasCreateArgs} args - Arguments to create a Aulas.
     * @example
     * // Create one Aulas
     * const Aulas = await prisma.aulas.create({
     *   data: {
     *     // ... data to create a Aulas
     *   }
     * })
     * 
    **/
    create<T extends aulasCreateArgs<ExtArgs>>(
      args: SelectSubset<T, aulasCreateArgs<ExtArgs>>
    ): Prisma__aulasClient<$Result.GetResult<Prisma.$aulasPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Aulas.
     *     @param {aulasCreateManyArgs} args - Arguments to create many Aulas.
     *     @example
     *     // Create many Aulas
     *     const aulas = await prisma.aulas.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends aulasCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, aulasCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Aulas.
     * @param {aulasDeleteArgs} args - Arguments to delete one Aulas.
     * @example
     * // Delete one Aulas
     * const Aulas = await prisma.aulas.delete({
     *   where: {
     *     // ... filter to delete one Aulas
     *   }
     * })
     * 
    **/
    delete<T extends aulasDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, aulasDeleteArgs<ExtArgs>>
    ): Prisma__aulasClient<$Result.GetResult<Prisma.$aulasPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Aulas.
     * @param {aulasUpdateArgs} args - Arguments to update one Aulas.
     * @example
     * // Update one Aulas
     * const aulas = await prisma.aulas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends aulasUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, aulasUpdateArgs<ExtArgs>>
    ): Prisma__aulasClient<$Result.GetResult<Prisma.$aulasPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Aulas.
     * @param {aulasDeleteManyArgs} args - Arguments to filter Aulas to delete.
     * @example
     * // Delete a few Aulas
     * const { count } = await prisma.aulas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends aulasDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, aulasDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aulasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Aulas
     * const aulas = await prisma.aulas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends aulasUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, aulasUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Aulas.
     * @param {aulasUpsertArgs} args - Arguments to update or create a Aulas.
     * @example
     * // Update or create a Aulas
     * const aulas = await prisma.aulas.upsert({
     *   create: {
     *     // ... data to create a Aulas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aulas we want to update
     *   }
     * })
    **/
    upsert<T extends aulasUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, aulasUpsertArgs<ExtArgs>>
    ): Prisma__aulasClient<$Result.GetResult<Prisma.$aulasPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Aulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aulasCountArgs} args - Arguments to filter Aulas to count.
     * @example
     * // Count the number of Aulas
     * const count = await prisma.aulas.count({
     *   where: {
     *     // ... the filter for the Aulas we want to count
     *   }
     * })
    **/
    count<T extends aulasCountArgs>(
      args?: Subset<T, aulasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AulasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AulasAggregateArgs>(args: Subset<T, AulasAggregateArgs>): Prisma.PrismaPromise<GetAulasAggregateType<T>>

    /**
     * Group by Aulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aulasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends aulasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: aulasGroupByArgs['orderBy'] }
        : { orderBy?: aulasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, aulasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAulasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the aulas model
   */
  readonly fields: aulasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for aulas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__aulasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the aulas model
   */ 
  interface aulasFieldRefs {
    readonly id: FieldRef<"aulas", 'String'>
    readonly nome: FieldRef<"aulas", 'String'>
    readonly descricao: FieldRef<"aulas", 'String'>
    readonly is_active: FieldRef<"aulas", 'Boolean'>
    readonly createdAt: FieldRef<"aulas", 'DateTime'>
    readonly updatedAt: FieldRef<"aulas", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * aulas findUnique
   */
  export type aulasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aulas
     */
    select?: aulasSelect<ExtArgs> | null
    /**
     * Filter, which aulas to fetch.
     */
    where: aulasWhereUniqueInput
  }


  /**
   * aulas findUniqueOrThrow
   */
  export type aulasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aulas
     */
    select?: aulasSelect<ExtArgs> | null
    /**
     * Filter, which aulas to fetch.
     */
    where: aulasWhereUniqueInput
  }


  /**
   * aulas findFirst
   */
  export type aulasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aulas
     */
    select?: aulasSelect<ExtArgs> | null
    /**
     * Filter, which aulas to fetch.
     */
    where?: aulasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aulas to fetch.
     */
    orderBy?: aulasOrderByWithRelationInput | aulasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for aulas.
     */
    cursor?: aulasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of aulas.
     */
    distinct?: AulasScalarFieldEnum | AulasScalarFieldEnum[]
  }


  /**
   * aulas findFirstOrThrow
   */
  export type aulasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aulas
     */
    select?: aulasSelect<ExtArgs> | null
    /**
     * Filter, which aulas to fetch.
     */
    where?: aulasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aulas to fetch.
     */
    orderBy?: aulasOrderByWithRelationInput | aulasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for aulas.
     */
    cursor?: aulasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of aulas.
     */
    distinct?: AulasScalarFieldEnum | AulasScalarFieldEnum[]
  }


  /**
   * aulas findMany
   */
  export type aulasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aulas
     */
    select?: aulasSelect<ExtArgs> | null
    /**
     * Filter, which aulas to fetch.
     */
    where?: aulasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aulas to fetch.
     */
    orderBy?: aulasOrderByWithRelationInput | aulasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing aulas.
     */
    cursor?: aulasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aulas.
     */
    skip?: number
    distinct?: AulasScalarFieldEnum | AulasScalarFieldEnum[]
  }


  /**
   * aulas create
   */
  export type aulasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aulas
     */
    select?: aulasSelect<ExtArgs> | null
    /**
     * The data needed to create a aulas.
     */
    data: XOR<aulasCreateInput, aulasUncheckedCreateInput>
  }


  /**
   * aulas createMany
   */
  export type aulasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many aulas.
     */
    data: aulasCreateManyInput | aulasCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * aulas update
   */
  export type aulasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aulas
     */
    select?: aulasSelect<ExtArgs> | null
    /**
     * The data needed to update a aulas.
     */
    data: XOR<aulasUpdateInput, aulasUncheckedUpdateInput>
    /**
     * Choose, which aulas to update.
     */
    where: aulasWhereUniqueInput
  }


  /**
   * aulas updateMany
   */
  export type aulasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update aulas.
     */
    data: XOR<aulasUpdateManyMutationInput, aulasUncheckedUpdateManyInput>
    /**
     * Filter which aulas to update
     */
    where?: aulasWhereInput
  }


  /**
   * aulas upsert
   */
  export type aulasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aulas
     */
    select?: aulasSelect<ExtArgs> | null
    /**
     * The filter to search for the aulas to update in case it exists.
     */
    where: aulasWhereUniqueInput
    /**
     * In case the aulas found by the `where` argument doesn't exist, create a new aulas with this data.
     */
    create: XOR<aulasCreateInput, aulasUncheckedCreateInput>
    /**
     * In case the aulas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<aulasUpdateInput, aulasUncheckedUpdateInput>
  }


  /**
   * aulas delete
   */
  export type aulasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aulas
     */
    select?: aulasSelect<ExtArgs> | null
    /**
     * Filter which aulas to delete.
     */
    where: aulasWhereUniqueInput
  }


  /**
   * aulas deleteMany
   */
  export type aulasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which aulas to delete
     */
    where?: aulasWhereInput
  }


  /**
   * aulas without action
   */
  export type aulasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aulas
     */
    select?: aulasSelect<ExtArgs> | null
  }



  /**
   * Model aulas_conteudo
   */

  export type AggregateAulas_conteudo = {
    _count: Aulas_conteudoCountAggregateOutputType | null
    _min: Aulas_conteudoMinAggregateOutputType | null
    _max: Aulas_conteudoMaxAggregateOutputType | null
  }

  export type Aulas_conteudoMinAggregateOutputType = {
    id: string | null
    id_aula: string | null
    nome: string | null
    conteudo: Buffer | null
  }

  export type Aulas_conteudoMaxAggregateOutputType = {
    id: string | null
    id_aula: string | null
    nome: string | null
    conteudo: Buffer | null
  }

  export type Aulas_conteudoCountAggregateOutputType = {
    id: number
    id_aula: number
    nome: number
    conteudo: number
    _all: number
  }


  export type Aulas_conteudoMinAggregateInputType = {
    id?: true
    id_aula?: true
    nome?: true
    conteudo?: true
  }

  export type Aulas_conteudoMaxAggregateInputType = {
    id?: true
    id_aula?: true
    nome?: true
    conteudo?: true
  }

  export type Aulas_conteudoCountAggregateInputType = {
    id?: true
    id_aula?: true
    nome?: true
    conteudo?: true
    _all?: true
  }

  export type Aulas_conteudoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which aulas_conteudo to aggregate.
     */
    where?: aulas_conteudoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aulas_conteudos to fetch.
     */
    orderBy?: aulas_conteudoOrderByWithRelationInput | aulas_conteudoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: aulas_conteudoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aulas_conteudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aulas_conteudos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned aulas_conteudos
    **/
    _count?: true | Aulas_conteudoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Aulas_conteudoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Aulas_conteudoMaxAggregateInputType
  }

  export type GetAulas_conteudoAggregateType<T extends Aulas_conteudoAggregateArgs> = {
        [P in keyof T & keyof AggregateAulas_conteudo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAulas_conteudo[P]>
      : GetScalarType<T[P], AggregateAulas_conteudo[P]>
  }




  export type aulas_conteudoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: aulas_conteudoWhereInput
    orderBy?: aulas_conteudoOrderByWithAggregationInput | aulas_conteudoOrderByWithAggregationInput[]
    by: Aulas_conteudoScalarFieldEnum[] | Aulas_conteudoScalarFieldEnum
    having?: aulas_conteudoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Aulas_conteudoCountAggregateInputType | true
    _min?: Aulas_conteudoMinAggregateInputType
    _max?: Aulas_conteudoMaxAggregateInputType
  }

  export type Aulas_conteudoGroupByOutputType = {
    id: string
    id_aula: string
    nome: string
    conteudo: Buffer
    _count: Aulas_conteudoCountAggregateOutputType | null
    _min: Aulas_conteudoMinAggregateOutputType | null
    _max: Aulas_conteudoMaxAggregateOutputType | null
  }

  type GetAulas_conteudoGroupByPayload<T extends aulas_conteudoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Aulas_conteudoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Aulas_conteudoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Aulas_conteudoGroupByOutputType[P]>
            : GetScalarType<T[P], Aulas_conteudoGroupByOutputType[P]>
        }
      >
    >


  export type aulas_conteudoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_aula?: boolean
    nome?: boolean
    conteudo?: boolean
  }, ExtArgs["result"]["aulas_conteudo"]>

  export type aulas_conteudoSelectScalar = {
    id?: boolean
    id_aula?: boolean
    nome?: boolean
    conteudo?: boolean
  }


  export type $aulas_conteudoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "aulas_conteudo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      id_aula: string
      nome: string
      conteudo: Buffer
    }, ExtArgs["result"]["aulas_conteudo"]>
    composites: {}
  }


  type aulas_conteudoGetPayload<S extends boolean | null | undefined | aulas_conteudoDefaultArgs> = $Result.GetResult<Prisma.$aulas_conteudoPayload, S>

  type aulas_conteudoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<aulas_conteudoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Aulas_conteudoCountAggregateInputType | true
    }

  export interface aulas_conteudoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['aulas_conteudo'], meta: { name: 'aulas_conteudo' } }
    /**
     * Find zero or one Aulas_conteudo that matches the filter.
     * @param {aulas_conteudoFindUniqueArgs} args - Arguments to find a Aulas_conteudo
     * @example
     * // Get one Aulas_conteudo
     * const aulas_conteudo = await prisma.aulas_conteudo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends aulas_conteudoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, aulas_conteudoFindUniqueArgs<ExtArgs>>
    ): Prisma__aulas_conteudoClient<$Result.GetResult<Prisma.$aulas_conteudoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Aulas_conteudo that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {aulas_conteudoFindUniqueOrThrowArgs} args - Arguments to find a Aulas_conteudo
     * @example
     * // Get one Aulas_conteudo
     * const aulas_conteudo = await prisma.aulas_conteudo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends aulas_conteudoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, aulas_conteudoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__aulas_conteudoClient<$Result.GetResult<Prisma.$aulas_conteudoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Aulas_conteudo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aulas_conteudoFindFirstArgs} args - Arguments to find a Aulas_conteudo
     * @example
     * // Get one Aulas_conteudo
     * const aulas_conteudo = await prisma.aulas_conteudo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends aulas_conteudoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, aulas_conteudoFindFirstArgs<ExtArgs>>
    ): Prisma__aulas_conteudoClient<$Result.GetResult<Prisma.$aulas_conteudoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Aulas_conteudo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aulas_conteudoFindFirstOrThrowArgs} args - Arguments to find a Aulas_conteudo
     * @example
     * // Get one Aulas_conteudo
     * const aulas_conteudo = await prisma.aulas_conteudo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends aulas_conteudoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, aulas_conteudoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__aulas_conteudoClient<$Result.GetResult<Prisma.$aulas_conteudoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Aulas_conteudos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aulas_conteudoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Aulas_conteudos
     * const aulas_conteudos = await prisma.aulas_conteudo.findMany()
     * 
     * // Get first 10 Aulas_conteudos
     * const aulas_conteudos = await prisma.aulas_conteudo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aulas_conteudoWithIdOnly = await prisma.aulas_conteudo.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends aulas_conteudoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, aulas_conteudoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$aulas_conteudoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Aulas_conteudo.
     * @param {aulas_conteudoCreateArgs} args - Arguments to create a Aulas_conteudo.
     * @example
     * // Create one Aulas_conteudo
     * const Aulas_conteudo = await prisma.aulas_conteudo.create({
     *   data: {
     *     // ... data to create a Aulas_conteudo
     *   }
     * })
     * 
    **/
    create<T extends aulas_conteudoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, aulas_conteudoCreateArgs<ExtArgs>>
    ): Prisma__aulas_conteudoClient<$Result.GetResult<Prisma.$aulas_conteudoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Aulas_conteudos.
     *     @param {aulas_conteudoCreateManyArgs} args - Arguments to create many Aulas_conteudos.
     *     @example
     *     // Create many Aulas_conteudos
     *     const aulas_conteudo = await prisma.aulas_conteudo.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends aulas_conteudoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, aulas_conteudoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Aulas_conteudo.
     * @param {aulas_conteudoDeleteArgs} args - Arguments to delete one Aulas_conteudo.
     * @example
     * // Delete one Aulas_conteudo
     * const Aulas_conteudo = await prisma.aulas_conteudo.delete({
     *   where: {
     *     // ... filter to delete one Aulas_conteudo
     *   }
     * })
     * 
    **/
    delete<T extends aulas_conteudoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, aulas_conteudoDeleteArgs<ExtArgs>>
    ): Prisma__aulas_conteudoClient<$Result.GetResult<Prisma.$aulas_conteudoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Aulas_conteudo.
     * @param {aulas_conteudoUpdateArgs} args - Arguments to update one Aulas_conteudo.
     * @example
     * // Update one Aulas_conteudo
     * const aulas_conteudo = await prisma.aulas_conteudo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends aulas_conteudoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, aulas_conteudoUpdateArgs<ExtArgs>>
    ): Prisma__aulas_conteudoClient<$Result.GetResult<Prisma.$aulas_conteudoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Aulas_conteudos.
     * @param {aulas_conteudoDeleteManyArgs} args - Arguments to filter Aulas_conteudos to delete.
     * @example
     * // Delete a few Aulas_conteudos
     * const { count } = await prisma.aulas_conteudo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends aulas_conteudoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, aulas_conteudoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aulas_conteudos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aulas_conteudoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Aulas_conteudos
     * const aulas_conteudo = await prisma.aulas_conteudo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends aulas_conteudoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, aulas_conteudoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Aulas_conteudo.
     * @param {aulas_conteudoUpsertArgs} args - Arguments to update or create a Aulas_conteudo.
     * @example
     * // Update or create a Aulas_conteudo
     * const aulas_conteudo = await prisma.aulas_conteudo.upsert({
     *   create: {
     *     // ... data to create a Aulas_conteudo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aulas_conteudo we want to update
     *   }
     * })
    **/
    upsert<T extends aulas_conteudoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, aulas_conteudoUpsertArgs<ExtArgs>>
    ): Prisma__aulas_conteudoClient<$Result.GetResult<Prisma.$aulas_conteudoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Aulas_conteudos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aulas_conteudoCountArgs} args - Arguments to filter Aulas_conteudos to count.
     * @example
     * // Count the number of Aulas_conteudos
     * const count = await prisma.aulas_conteudo.count({
     *   where: {
     *     // ... the filter for the Aulas_conteudos we want to count
     *   }
     * })
    **/
    count<T extends aulas_conteudoCountArgs>(
      args?: Subset<T, aulas_conteudoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Aulas_conteudoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aulas_conteudo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Aulas_conteudoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Aulas_conteudoAggregateArgs>(args: Subset<T, Aulas_conteudoAggregateArgs>): Prisma.PrismaPromise<GetAulas_conteudoAggregateType<T>>

    /**
     * Group by Aulas_conteudo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aulas_conteudoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends aulas_conteudoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: aulas_conteudoGroupByArgs['orderBy'] }
        : { orderBy?: aulas_conteudoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, aulas_conteudoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAulas_conteudoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the aulas_conteudo model
   */
  readonly fields: aulas_conteudoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for aulas_conteudo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__aulas_conteudoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the aulas_conteudo model
   */ 
  interface aulas_conteudoFieldRefs {
    readonly id: FieldRef<"aulas_conteudo", 'String'>
    readonly id_aula: FieldRef<"aulas_conteudo", 'String'>
    readonly nome: FieldRef<"aulas_conteudo", 'String'>
    readonly conteudo: FieldRef<"aulas_conteudo", 'Bytes'>
  }
    

  // Custom InputTypes

  /**
   * aulas_conteudo findUnique
   */
  export type aulas_conteudoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aulas_conteudo
     */
    select?: aulas_conteudoSelect<ExtArgs> | null
    /**
     * Filter, which aulas_conteudo to fetch.
     */
    where: aulas_conteudoWhereUniqueInput
  }


  /**
   * aulas_conteudo findUniqueOrThrow
   */
  export type aulas_conteudoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aulas_conteudo
     */
    select?: aulas_conteudoSelect<ExtArgs> | null
    /**
     * Filter, which aulas_conteudo to fetch.
     */
    where: aulas_conteudoWhereUniqueInput
  }


  /**
   * aulas_conteudo findFirst
   */
  export type aulas_conteudoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aulas_conteudo
     */
    select?: aulas_conteudoSelect<ExtArgs> | null
    /**
     * Filter, which aulas_conteudo to fetch.
     */
    where?: aulas_conteudoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aulas_conteudos to fetch.
     */
    orderBy?: aulas_conteudoOrderByWithRelationInput | aulas_conteudoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for aulas_conteudos.
     */
    cursor?: aulas_conteudoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aulas_conteudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aulas_conteudos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of aulas_conteudos.
     */
    distinct?: Aulas_conteudoScalarFieldEnum | Aulas_conteudoScalarFieldEnum[]
  }


  /**
   * aulas_conteudo findFirstOrThrow
   */
  export type aulas_conteudoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aulas_conteudo
     */
    select?: aulas_conteudoSelect<ExtArgs> | null
    /**
     * Filter, which aulas_conteudo to fetch.
     */
    where?: aulas_conteudoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aulas_conteudos to fetch.
     */
    orderBy?: aulas_conteudoOrderByWithRelationInput | aulas_conteudoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for aulas_conteudos.
     */
    cursor?: aulas_conteudoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aulas_conteudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aulas_conteudos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of aulas_conteudos.
     */
    distinct?: Aulas_conteudoScalarFieldEnum | Aulas_conteudoScalarFieldEnum[]
  }


  /**
   * aulas_conteudo findMany
   */
  export type aulas_conteudoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aulas_conteudo
     */
    select?: aulas_conteudoSelect<ExtArgs> | null
    /**
     * Filter, which aulas_conteudos to fetch.
     */
    where?: aulas_conteudoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aulas_conteudos to fetch.
     */
    orderBy?: aulas_conteudoOrderByWithRelationInput | aulas_conteudoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing aulas_conteudos.
     */
    cursor?: aulas_conteudoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aulas_conteudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aulas_conteudos.
     */
    skip?: number
    distinct?: Aulas_conteudoScalarFieldEnum | Aulas_conteudoScalarFieldEnum[]
  }


  /**
   * aulas_conteudo create
   */
  export type aulas_conteudoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aulas_conteudo
     */
    select?: aulas_conteudoSelect<ExtArgs> | null
    /**
     * The data needed to create a aulas_conteudo.
     */
    data: XOR<aulas_conteudoCreateInput, aulas_conteudoUncheckedCreateInput>
  }


  /**
   * aulas_conteudo createMany
   */
  export type aulas_conteudoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many aulas_conteudos.
     */
    data: aulas_conteudoCreateManyInput | aulas_conteudoCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * aulas_conteudo update
   */
  export type aulas_conteudoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aulas_conteudo
     */
    select?: aulas_conteudoSelect<ExtArgs> | null
    /**
     * The data needed to update a aulas_conteudo.
     */
    data: XOR<aulas_conteudoUpdateInput, aulas_conteudoUncheckedUpdateInput>
    /**
     * Choose, which aulas_conteudo to update.
     */
    where: aulas_conteudoWhereUniqueInput
  }


  /**
   * aulas_conteudo updateMany
   */
  export type aulas_conteudoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update aulas_conteudos.
     */
    data: XOR<aulas_conteudoUpdateManyMutationInput, aulas_conteudoUncheckedUpdateManyInput>
    /**
     * Filter which aulas_conteudos to update
     */
    where?: aulas_conteudoWhereInput
  }


  /**
   * aulas_conteudo upsert
   */
  export type aulas_conteudoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aulas_conteudo
     */
    select?: aulas_conteudoSelect<ExtArgs> | null
    /**
     * The filter to search for the aulas_conteudo to update in case it exists.
     */
    where: aulas_conteudoWhereUniqueInput
    /**
     * In case the aulas_conteudo found by the `where` argument doesn't exist, create a new aulas_conteudo with this data.
     */
    create: XOR<aulas_conteudoCreateInput, aulas_conteudoUncheckedCreateInput>
    /**
     * In case the aulas_conteudo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<aulas_conteudoUpdateInput, aulas_conteudoUncheckedUpdateInput>
  }


  /**
   * aulas_conteudo delete
   */
  export type aulas_conteudoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aulas_conteudo
     */
    select?: aulas_conteudoSelect<ExtArgs> | null
    /**
     * Filter which aulas_conteudo to delete.
     */
    where: aulas_conteudoWhereUniqueInput
  }


  /**
   * aulas_conteudo deleteMany
   */
  export type aulas_conteudoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which aulas_conteudos to delete
     */
    where?: aulas_conteudoWhereInput
  }


  /**
   * aulas_conteudo without action
   */
  export type aulas_conteudoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aulas_conteudo
     */
    select?: aulas_conteudoSelect<ExtArgs> | null
  }



  /**
   * Model relation_curso_aulas
   */

  export type AggregateRelation_curso_aulas = {
    _count: Relation_curso_aulasCountAggregateOutputType | null
    _min: Relation_curso_aulasMinAggregateOutputType | null
    _max: Relation_curso_aulasMaxAggregateOutputType | null
  }

  export type Relation_curso_aulasMinAggregateOutputType = {
    id: string | null
    id_curso: string | null
    id_aula: string | null
  }

  export type Relation_curso_aulasMaxAggregateOutputType = {
    id: string | null
    id_curso: string | null
    id_aula: string | null
  }

  export type Relation_curso_aulasCountAggregateOutputType = {
    id: number
    id_curso: number
    id_aula: number
    _all: number
  }


  export type Relation_curso_aulasMinAggregateInputType = {
    id?: true
    id_curso?: true
    id_aula?: true
  }

  export type Relation_curso_aulasMaxAggregateInputType = {
    id?: true
    id_curso?: true
    id_aula?: true
  }

  export type Relation_curso_aulasCountAggregateInputType = {
    id?: true
    id_curso?: true
    id_aula?: true
    _all?: true
  }

  export type Relation_curso_aulasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which relation_curso_aulas to aggregate.
     */
    where?: relation_curso_aulasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of relation_curso_aulas to fetch.
     */
    orderBy?: relation_curso_aulasOrderByWithRelationInput | relation_curso_aulasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: relation_curso_aulasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` relation_curso_aulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` relation_curso_aulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned relation_curso_aulas
    **/
    _count?: true | Relation_curso_aulasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Relation_curso_aulasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Relation_curso_aulasMaxAggregateInputType
  }

  export type GetRelation_curso_aulasAggregateType<T extends Relation_curso_aulasAggregateArgs> = {
        [P in keyof T & keyof AggregateRelation_curso_aulas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelation_curso_aulas[P]>
      : GetScalarType<T[P], AggregateRelation_curso_aulas[P]>
  }




  export type relation_curso_aulasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: relation_curso_aulasWhereInput
    orderBy?: relation_curso_aulasOrderByWithAggregationInput | relation_curso_aulasOrderByWithAggregationInput[]
    by: Relation_curso_aulasScalarFieldEnum[] | Relation_curso_aulasScalarFieldEnum
    having?: relation_curso_aulasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Relation_curso_aulasCountAggregateInputType | true
    _min?: Relation_curso_aulasMinAggregateInputType
    _max?: Relation_curso_aulasMaxAggregateInputType
  }

  export type Relation_curso_aulasGroupByOutputType = {
    id: string
    id_curso: string
    id_aula: string
    _count: Relation_curso_aulasCountAggregateOutputType | null
    _min: Relation_curso_aulasMinAggregateOutputType | null
    _max: Relation_curso_aulasMaxAggregateOutputType | null
  }

  type GetRelation_curso_aulasGroupByPayload<T extends relation_curso_aulasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Relation_curso_aulasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Relation_curso_aulasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Relation_curso_aulasGroupByOutputType[P]>
            : GetScalarType<T[P], Relation_curso_aulasGroupByOutputType[P]>
        }
      >
    >


  export type relation_curso_aulasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_curso?: boolean
    id_aula?: boolean
  }, ExtArgs["result"]["relation_curso_aulas"]>

  export type relation_curso_aulasSelectScalar = {
    id?: boolean
    id_curso?: boolean
    id_aula?: boolean
  }


  export type $relation_curso_aulasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "relation_curso_aulas"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      id_curso: string
      id_aula: string
    }, ExtArgs["result"]["relation_curso_aulas"]>
    composites: {}
  }


  type relation_curso_aulasGetPayload<S extends boolean | null | undefined | relation_curso_aulasDefaultArgs> = $Result.GetResult<Prisma.$relation_curso_aulasPayload, S>

  type relation_curso_aulasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<relation_curso_aulasFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Relation_curso_aulasCountAggregateInputType | true
    }

  export interface relation_curso_aulasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['relation_curso_aulas'], meta: { name: 'relation_curso_aulas' } }
    /**
     * Find zero or one Relation_curso_aulas that matches the filter.
     * @param {relation_curso_aulasFindUniqueArgs} args - Arguments to find a Relation_curso_aulas
     * @example
     * // Get one Relation_curso_aulas
     * const relation_curso_aulas = await prisma.relation_curso_aulas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends relation_curso_aulasFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, relation_curso_aulasFindUniqueArgs<ExtArgs>>
    ): Prisma__relation_curso_aulasClient<$Result.GetResult<Prisma.$relation_curso_aulasPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Relation_curso_aulas that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {relation_curso_aulasFindUniqueOrThrowArgs} args - Arguments to find a Relation_curso_aulas
     * @example
     * // Get one Relation_curso_aulas
     * const relation_curso_aulas = await prisma.relation_curso_aulas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends relation_curso_aulasFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, relation_curso_aulasFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__relation_curso_aulasClient<$Result.GetResult<Prisma.$relation_curso_aulasPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Relation_curso_aulas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {relation_curso_aulasFindFirstArgs} args - Arguments to find a Relation_curso_aulas
     * @example
     * // Get one Relation_curso_aulas
     * const relation_curso_aulas = await prisma.relation_curso_aulas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends relation_curso_aulasFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, relation_curso_aulasFindFirstArgs<ExtArgs>>
    ): Prisma__relation_curso_aulasClient<$Result.GetResult<Prisma.$relation_curso_aulasPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Relation_curso_aulas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {relation_curso_aulasFindFirstOrThrowArgs} args - Arguments to find a Relation_curso_aulas
     * @example
     * // Get one Relation_curso_aulas
     * const relation_curso_aulas = await prisma.relation_curso_aulas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends relation_curso_aulasFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, relation_curso_aulasFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__relation_curso_aulasClient<$Result.GetResult<Prisma.$relation_curso_aulasPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Relation_curso_aulas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {relation_curso_aulasFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Relation_curso_aulas
     * const relation_curso_aulas = await prisma.relation_curso_aulas.findMany()
     * 
     * // Get first 10 Relation_curso_aulas
     * const relation_curso_aulas = await prisma.relation_curso_aulas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const relation_curso_aulasWithIdOnly = await prisma.relation_curso_aulas.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends relation_curso_aulasFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, relation_curso_aulasFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$relation_curso_aulasPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Relation_curso_aulas.
     * @param {relation_curso_aulasCreateArgs} args - Arguments to create a Relation_curso_aulas.
     * @example
     * // Create one Relation_curso_aulas
     * const Relation_curso_aulas = await prisma.relation_curso_aulas.create({
     *   data: {
     *     // ... data to create a Relation_curso_aulas
     *   }
     * })
     * 
    **/
    create<T extends relation_curso_aulasCreateArgs<ExtArgs>>(
      args: SelectSubset<T, relation_curso_aulasCreateArgs<ExtArgs>>
    ): Prisma__relation_curso_aulasClient<$Result.GetResult<Prisma.$relation_curso_aulasPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Relation_curso_aulas.
     *     @param {relation_curso_aulasCreateManyArgs} args - Arguments to create many Relation_curso_aulas.
     *     @example
     *     // Create many Relation_curso_aulas
     *     const relation_curso_aulas = await prisma.relation_curso_aulas.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends relation_curso_aulasCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, relation_curso_aulasCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Relation_curso_aulas.
     * @param {relation_curso_aulasDeleteArgs} args - Arguments to delete one Relation_curso_aulas.
     * @example
     * // Delete one Relation_curso_aulas
     * const Relation_curso_aulas = await prisma.relation_curso_aulas.delete({
     *   where: {
     *     // ... filter to delete one Relation_curso_aulas
     *   }
     * })
     * 
    **/
    delete<T extends relation_curso_aulasDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, relation_curso_aulasDeleteArgs<ExtArgs>>
    ): Prisma__relation_curso_aulasClient<$Result.GetResult<Prisma.$relation_curso_aulasPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Relation_curso_aulas.
     * @param {relation_curso_aulasUpdateArgs} args - Arguments to update one Relation_curso_aulas.
     * @example
     * // Update one Relation_curso_aulas
     * const relation_curso_aulas = await prisma.relation_curso_aulas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends relation_curso_aulasUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, relation_curso_aulasUpdateArgs<ExtArgs>>
    ): Prisma__relation_curso_aulasClient<$Result.GetResult<Prisma.$relation_curso_aulasPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Relation_curso_aulas.
     * @param {relation_curso_aulasDeleteManyArgs} args - Arguments to filter Relation_curso_aulas to delete.
     * @example
     * // Delete a few Relation_curso_aulas
     * const { count } = await prisma.relation_curso_aulas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends relation_curso_aulasDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, relation_curso_aulasDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Relation_curso_aulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {relation_curso_aulasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Relation_curso_aulas
     * const relation_curso_aulas = await prisma.relation_curso_aulas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends relation_curso_aulasUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, relation_curso_aulasUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Relation_curso_aulas.
     * @param {relation_curso_aulasUpsertArgs} args - Arguments to update or create a Relation_curso_aulas.
     * @example
     * // Update or create a Relation_curso_aulas
     * const relation_curso_aulas = await prisma.relation_curso_aulas.upsert({
     *   create: {
     *     // ... data to create a Relation_curso_aulas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Relation_curso_aulas we want to update
     *   }
     * })
    **/
    upsert<T extends relation_curso_aulasUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, relation_curso_aulasUpsertArgs<ExtArgs>>
    ): Prisma__relation_curso_aulasClient<$Result.GetResult<Prisma.$relation_curso_aulasPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Relation_curso_aulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {relation_curso_aulasCountArgs} args - Arguments to filter Relation_curso_aulas to count.
     * @example
     * // Count the number of Relation_curso_aulas
     * const count = await prisma.relation_curso_aulas.count({
     *   where: {
     *     // ... the filter for the Relation_curso_aulas we want to count
     *   }
     * })
    **/
    count<T extends relation_curso_aulasCountArgs>(
      args?: Subset<T, relation_curso_aulasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Relation_curso_aulasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Relation_curso_aulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Relation_curso_aulasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Relation_curso_aulasAggregateArgs>(args: Subset<T, Relation_curso_aulasAggregateArgs>): Prisma.PrismaPromise<GetRelation_curso_aulasAggregateType<T>>

    /**
     * Group by Relation_curso_aulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {relation_curso_aulasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends relation_curso_aulasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: relation_curso_aulasGroupByArgs['orderBy'] }
        : { orderBy?: relation_curso_aulasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, relation_curso_aulasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRelation_curso_aulasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the relation_curso_aulas model
   */
  readonly fields: relation_curso_aulasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for relation_curso_aulas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__relation_curso_aulasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the relation_curso_aulas model
   */ 
  interface relation_curso_aulasFieldRefs {
    readonly id: FieldRef<"relation_curso_aulas", 'String'>
    readonly id_curso: FieldRef<"relation_curso_aulas", 'String'>
    readonly id_aula: FieldRef<"relation_curso_aulas", 'String'>
  }
    

  // Custom InputTypes

  /**
   * relation_curso_aulas findUnique
   */
  export type relation_curso_aulasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the relation_curso_aulas
     */
    select?: relation_curso_aulasSelect<ExtArgs> | null
    /**
     * Filter, which relation_curso_aulas to fetch.
     */
    where: relation_curso_aulasWhereUniqueInput
  }


  /**
   * relation_curso_aulas findUniqueOrThrow
   */
  export type relation_curso_aulasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the relation_curso_aulas
     */
    select?: relation_curso_aulasSelect<ExtArgs> | null
    /**
     * Filter, which relation_curso_aulas to fetch.
     */
    where: relation_curso_aulasWhereUniqueInput
  }


  /**
   * relation_curso_aulas findFirst
   */
  export type relation_curso_aulasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the relation_curso_aulas
     */
    select?: relation_curso_aulasSelect<ExtArgs> | null
    /**
     * Filter, which relation_curso_aulas to fetch.
     */
    where?: relation_curso_aulasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of relation_curso_aulas to fetch.
     */
    orderBy?: relation_curso_aulasOrderByWithRelationInput | relation_curso_aulasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for relation_curso_aulas.
     */
    cursor?: relation_curso_aulasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` relation_curso_aulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` relation_curso_aulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of relation_curso_aulas.
     */
    distinct?: Relation_curso_aulasScalarFieldEnum | Relation_curso_aulasScalarFieldEnum[]
  }


  /**
   * relation_curso_aulas findFirstOrThrow
   */
  export type relation_curso_aulasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the relation_curso_aulas
     */
    select?: relation_curso_aulasSelect<ExtArgs> | null
    /**
     * Filter, which relation_curso_aulas to fetch.
     */
    where?: relation_curso_aulasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of relation_curso_aulas to fetch.
     */
    orderBy?: relation_curso_aulasOrderByWithRelationInput | relation_curso_aulasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for relation_curso_aulas.
     */
    cursor?: relation_curso_aulasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` relation_curso_aulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` relation_curso_aulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of relation_curso_aulas.
     */
    distinct?: Relation_curso_aulasScalarFieldEnum | Relation_curso_aulasScalarFieldEnum[]
  }


  /**
   * relation_curso_aulas findMany
   */
  export type relation_curso_aulasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the relation_curso_aulas
     */
    select?: relation_curso_aulasSelect<ExtArgs> | null
    /**
     * Filter, which relation_curso_aulas to fetch.
     */
    where?: relation_curso_aulasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of relation_curso_aulas to fetch.
     */
    orderBy?: relation_curso_aulasOrderByWithRelationInput | relation_curso_aulasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing relation_curso_aulas.
     */
    cursor?: relation_curso_aulasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` relation_curso_aulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` relation_curso_aulas.
     */
    skip?: number
    distinct?: Relation_curso_aulasScalarFieldEnum | Relation_curso_aulasScalarFieldEnum[]
  }


  /**
   * relation_curso_aulas create
   */
  export type relation_curso_aulasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the relation_curso_aulas
     */
    select?: relation_curso_aulasSelect<ExtArgs> | null
    /**
     * The data needed to create a relation_curso_aulas.
     */
    data: XOR<relation_curso_aulasCreateInput, relation_curso_aulasUncheckedCreateInput>
  }


  /**
   * relation_curso_aulas createMany
   */
  export type relation_curso_aulasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many relation_curso_aulas.
     */
    data: relation_curso_aulasCreateManyInput | relation_curso_aulasCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * relation_curso_aulas update
   */
  export type relation_curso_aulasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the relation_curso_aulas
     */
    select?: relation_curso_aulasSelect<ExtArgs> | null
    /**
     * The data needed to update a relation_curso_aulas.
     */
    data: XOR<relation_curso_aulasUpdateInput, relation_curso_aulasUncheckedUpdateInput>
    /**
     * Choose, which relation_curso_aulas to update.
     */
    where: relation_curso_aulasWhereUniqueInput
  }


  /**
   * relation_curso_aulas updateMany
   */
  export type relation_curso_aulasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update relation_curso_aulas.
     */
    data: XOR<relation_curso_aulasUpdateManyMutationInput, relation_curso_aulasUncheckedUpdateManyInput>
    /**
     * Filter which relation_curso_aulas to update
     */
    where?: relation_curso_aulasWhereInput
  }


  /**
   * relation_curso_aulas upsert
   */
  export type relation_curso_aulasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the relation_curso_aulas
     */
    select?: relation_curso_aulasSelect<ExtArgs> | null
    /**
     * The filter to search for the relation_curso_aulas to update in case it exists.
     */
    where: relation_curso_aulasWhereUniqueInput
    /**
     * In case the relation_curso_aulas found by the `where` argument doesn't exist, create a new relation_curso_aulas with this data.
     */
    create: XOR<relation_curso_aulasCreateInput, relation_curso_aulasUncheckedCreateInput>
    /**
     * In case the relation_curso_aulas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<relation_curso_aulasUpdateInput, relation_curso_aulasUncheckedUpdateInput>
  }


  /**
   * relation_curso_aulas delete
   */
  export type relation_curso_aulasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the relation_curso_aulas
     */
    select?: relation_curso_aulasSelect<ExtArgs> | null
    /**
     * Filter which relation_curso_aulas to delete.
     */
    where: relation_curso_aulasWhereUniqueInput
  }


  /**
   * relation_curso_aulas deleteMany
   */
  export type relation_curso_aulasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which relation_curso_aulas to delete
     */
    where?: relation_curso_aulasWhereInput
  }


  /**
   * relation_curso_aulas without action
   */
  export type relation_curso_aulasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the relation_curso_aulas
     */
    select?: relation_curso_aulasSelect<ExtArgs> | null
  }



  /**
   * Model relation_aluno_curso
   */

  export type AggregateRelation_aluno_curso = {
    _count: Relation_aluno_cursoCountAggregateOutputType | null
    _min: Relation_aluno_cursoMinAggregateOutputType | null
    _max: Relation_aluno_cursoMaxAggregateOutputType | null
  }

  export type Relation_aluno_cursoMinAggregateOutputType = {
    id: string | null
    id_aluno: string | null
    id_curso: string | null
    status: $Enums.StatusEnum | null
  }

  export type Relation_aluno_cursoMaxAggregateOutputType = {
    id: string | null
    id_aluno: string | null
    id_curso: string | null
    status: $Enums.StatusEnum | null
  }

  export type Relation_aluno_cursoCountAggregateOutputType = {
    id: number
    id_aluno: number
    id_curso: number
    status: number
    _all: number
  }


  export type Relation_aluno_cursoMinAggregateInputType = {
    id?: true
    id_aluno?: true
    id_curso?: true
    status?: true
  }

  export type Relation_aluno_cursoMaxAggregateInputType = {
    id?: true
    id_aluno?: true
    id_curso?: true
    status?: true
  }

  export type Relation_aluno_cursoCountAggregateInputType = {
    id?: true
    id_aluno?: true
    id_curso?: true
    status?: true
    _all?: true
  }

  export type Relation_aluno_cursoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which relation_aluno_curso to aggregate.
     */
    where?: relation_aluno_cursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of relation_aluno_cursos to fetch.
     */
    orderBy?: relation_aluno_cursoOrderByWithRelationInput | relation_aluno_cursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: relation_aluno_cursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` relation_aluno_cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` relation_aluno_cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned relation_aluno_cursos
    **/
    _count?: true | Relation_aluno_cursoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Relation_aluno_cursoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Relation_aluno_cursoMaxAggregateInputType
  }

  export type GetRelation_aluno_cursoAggregateType<T extends Relation_aluno_cursoAggregateArgs> = {
        [P in keyof T & keyof AggregateRelation_aluno_curso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelation_aluno_curso[P]>
      : GetScalarType<T[P], AggregateRelation_aluno_curso[P]>
  }




  export type relation_aluno_cursoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: relation_aluno_cursoWhereInput
    orderBy?: relation_aluno_cursoOrderByWithAggregationInput | relation_aluno_cursoOrderByWithAggregationInput[]
    by: Relation_aluno_cursoScalarFieldEnum[] | Relation_aluno_cursoScalarFieldEnum
    having?: relation_aluno_cursoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Relation_aluno_cursoCountAggregateInputType | true
    _min?: Relation_aluno_cursoMinAggregateInputType
    _max?: Relation_aluno_cursoMaxAggregateInputType
  }

  export type Relation_aluno_cursoGroupByOutputType = {
    id: string
    id_aluno: string
    id_curso: string
    status: $Enums.StatusEnum
    _count: Relation_aluno_cursoCountAggregateOutputType | null
    _min: Relation_aluno_cursoMinAggregateOutputType | null
    _max: Relation_aluno_cursoMaxAggregateOutputType | null
  }

  type GetRelation_aluno_cursoGroupByPayload<T extends relation_aluno_cursoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Relation_aluno_cursoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Relation_aluno_cursoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Relation_aluno_cursoGroupByOutputType[P]>
            : GetScalarType<T[P], Relation_aluno_cursoGroupByOutputType[P]>
        }
      >
    >


  export type relation_aluno_cursoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_aluno?: boolean
    id_curso?: boolean
    status?: boolean
  }, ExtArgs["result"]["relation_aluno_curso"]>

  export type relation_aluno_cursoSelectScalar = {
    id?: boolean
    id_aluno?: boolean
    id_curso?: boolean
    status?: boolean
  }


  export type $relation_aluno_cursoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "relation_aluno_curso"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      id_aluno: string
      id_curso: string
      status: $Enums.StatusEnum
    }, ExtArgs["result"]["relation_aluno_curso"]>
    composites: {}
  }


  type relation_aluno_cursoGetPayload<S extends boolean | null | undefined | relation_aluno_cursoDefaultArgs> = $Result.GetResult<Prisma.$relation_aluno_cursoPayload, S>

  type relation_aluno_cursoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<relation_aluno_cursoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Relation_aluno_cursoCountAggregateInputType | true
    }

  export interface relation_aluno_cursoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['relation_aluno_curso'], meta: { name: 'relation_aluno_curso' } }
    /**
     * Find zero or one Relation_aluno_curso that matches the filter.
     * @param {relation_aluno_cursoFindUniqueArgs} args - Arguments to find a Relation_aluno_curso
     * @example
     * // Get one Relation_aluno_curso
     * const relation_aluno_curso = await prisma.relation_aluno_curso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends relation_aluno_cursoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, relation_aluno_cursoFindUniqueArgs<ExtArgs>>
    ): Prisma__relation_aluno_cursoClient<$Result.GetResult<Prisma.$relation_aluno_cursoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Relation_aluno_curso that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {relation_aluno_cursoFindUniqueOrThrowArgs} args - Arguments to find a Relation_aluno_curso
     * @example
     * // Get one Relation_aluno_curso
     * const relation_aluno_curso = await prisma.relation_aluno_curso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends relation_aluno_cursoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, relation_aluno_cursoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__relation_aluno_cursoClient<$Result.GetResult<Prisma.$relation_aluno_cursoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Relation_aluno_curso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {relation_aluno_cursoFindFirstArgs} args - Arguments to find a Relation_aluno_curso
     * @example
     * // Get one Relation_aluno_curso
     * const relation_aluno_curso = await prisma.relation_aluno_curso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends relation_aluno_cursoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, relation_aluno_cursoFindFirstArgs<ExtArgs>>
    ): Prisma__relation_aluno_cursoClient<$Result.GetResult<Prisma.$relation_aluno_cursoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Relation_aluno_curso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {relation_aluno_cursoFindFirstOrThrowArgs} args - Arguments to find a Relation_aluno_curso
     * @example
     * // Get one Relation_aluno_curso
     * const relation_aluno_curso = await prisma.relation_aluno_curso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends relation_aluno_cursoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, relation_aluno_cursoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__relation_aluno_cursoClient<$Result.GetResult<Prisma.$relation_aluno_cursoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Relation_aluno_cursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {relation_aluno_cursoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Relation_aluno_cursos
     * const relation_aluno_cursos = await prisma.relation_aluno_curso.findMany()
     * 
     * // Get first 10 Relation_aluno_cursos
     * const relation_aluno_cursos = await prisma.relation_aluno_curso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const relation_aluno_cursoWithIdOnly = await prisma.relation_aluno_curso.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends relation_aluno_cursoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, relation_aluno_cursoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$relation_aluno_cursoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Relation_aluno_curso.
     * @param {relation_aluno_cursoCreateArgs} args - Arguments to create a Relation_aluno_curso.
     * @example
     * // Create one Relation_aluno_curso
     * const Relation_aluno_curso = await prisma.relation_aluno_curso.create({
     *   data: {
     *     // ... data to create a Relation_aluno_curso
     *   }
     * })
     * 
    **/
    create<T extends relation_aluno_cursoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, relation_aluno_cursoCreateArgs<ExtArgs>>
    ): Prisma__relation_aluno_cursoClient<$Result.GetResult<Prisma.$relation_aluno_cursoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Relation_aluno_cursos.
     *     @param {relation_aluno_cursoCreateManyArgs} args - Arguments to create many Relation_aluno_cursos.
     *     @example
     *     // Create many Relation_aluno_cursos
     *     const relation_aluno_curso = await prisma.relation_aluno_curso.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends relation_aluno_cursoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, relation_aluno_cursoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Relation_aluno_curso.
     * @param {relation_aluno_cursoDeleteArgs} args - Arguments to delete one Relation_aluno_curso.
     * @example
     * // Delete one Relation_aluno_curso
     * const Relation_aluno_curso = await prisma.relation_aluno_curso.delete({
     *   where: {
     *     // ... filter to delete one Relation_aluno_curso
     *   }
     * })
     * 
    **/
    delete<T extends relation_aluno_cursoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, relation_aluno_cursoDeleteArgs<ExtArgs>>
    ): Prisma__relation_aluno_cursoClient<$Result.GetResult<Prisma.$relation_aluno_cursoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Relation_aluno_curso.
     * @param {relation_aluno_cursoUpdateArgs} args - Arguments to update one Relation_aluno_curso.
     * @example
     * // Update one Relation_aluno_curso
     * const relation_aluno_curso = await prisma.relation_aluno_curso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends relation_aluno_cursoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, relation_aluno_cursoUpdateArgs<ExtArgs>>
    ): Prisma__relation_aluno_cursoClient<$Result.GetResult<Prisma.$relation_aluno_cursoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Relation_aluno_cursos.
     * @param {relation_aluno_cursoDeleteManyArgs} args - Arguments to filter Relation_aluno_cursos to delete.
     * @example
     * // Delete a few Relation_aluno_cursos
     * const { count } = await prisma.relation_aluno_curso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends relation_aluno_cursoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, relation_aluno_cursoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Relation_aluno_cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {relation_aluno_cursoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Relation_aluno_cursos
     * const relation_aluno_curso = await prisma.relation_aluno_curso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends relation_aluno_cursoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, relation_aluno_cursoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Relation_aluno_curso.
     * @param {relation_aluno_cursoUpsertArgs} args - Arguments to update or create a Relation_aluno_curso.
     * @example
     * // Update or create a Relation_aluno_curso
     * const relation_aluno_curso = await prisma.relation_aluno_curso.upsert({
     *   create: {
     *     // ... data to create a Relation_aluno_curso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Relation_aluno_curso we want to update
     *   }
     * })
    **/
    upsert<T extends relation_aluno_cursoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, relation_aluno_cursoUpsertArgs<ExtArgs>>
    ): Prisma__relation_aluno_cursoClient<$Result.GetResult<Prisma.$relation_aluno_cursoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Relation_aluno_cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {relation_aluno_cursoCountArgs} args - Arguments to filter Relation_aluno_cursos to count.
     * @example
     * // Count the number of Relation_aluno_cursos
     * const count = await prisma.relation_aluno_curso.count({
     *   where: {
     *     // ... the filter for the Relation_aluno_cursos we want to count
     *   }
     * })
    **/
    count<T extends relation_aluno_cursoCountArgs>(
      args?: Subset<T, relation_aluno_cursoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Relation_aluno_cursoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Relation_aluno_curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Relation_aluno_cursoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Relation_aluno_cursoAggregateArgs>(args: Subset<T, Relation_aluno_cursoAggregateArgs>): Prisma.PrismaPromise<GetRelation_aluno_cursoAggregateType<T>>

    /**
     * Group by Relation_aluno_curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {relation_aluno_cursoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends relation_aluno_cursoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: relation_aluno_cursoGroupByArgs['orderBy'] }
        : { orderBy?: relation_aluno_cursoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, relation_aluno_cursoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRelation_aluno_cursoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the relation_aluno_curso model
   */
  readonly fields: relation_aluno_cursoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for relation_aluno_curso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__relation_aluno_cursoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the relation_aluno_curso model
   */ 
  interface relation_aluno_cursoFieldRefs {
    readonly id: FieldRef<"relation_aluno_curso", 'String'>
    readonly id_aluno: FieldRef<"relation_aluno_curso", 'String'>
    readonly id_curso: FieldRef<"relation_aluno_curso", 'String'>
    readonly status: FieldRef<"relation_aluno_curso", 'StatusEnum'>
  }
    

  // Custom InputTypes

  /**
   * relation_aluno_curso findUnique
   */
  export type relation_aluno_cursoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the relation_aluno_curso
     */
    select?: relation_aluno_cursoSelect<ExtArgs> | null
    /**
     * Filter, which relation_aluno_curso to fetch.
     */
    where: relation_aluno_cursoWhereUniqueInput
  }


  /**
   * relation_aluno_curso findUniqueOrThrow
   */
  export type relation_aluno_cursoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the relation_aluno_curso
     */
    select?: relation_aluno_cursoSelect<ExtArgs> | null
    /**
     * Filter, which relation_aluno_curso to fetch.
     */
    where: relation_aluno_cursoWhereUniqueInput
  }


  /**
   * relation_aluno_curso findFirst
   */
  export type relation_aluno_cursoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the relation_aluno_curso
     */
    select?: relation_aluno_cursoSelect<ExtArgs> | null
    /**
     * Filter, which relation_aluno_curso to fetch.
     */
    where?: relation_aluno_cursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of relation_aluno_cursos to fetch.
     */
    orderBy?: relation_aluno_cursoOrderByWithRelationInput | relation_aluno_cursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for relation_aluno_cursos.
     */
    cursor?: relation_aluno_cursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` relation_aluno_cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` relation_aluno_cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of relation_aluno_cursos.
     */
    distinct?: Relation_aluno_cursoScalarFieldEnum | Relation_aluno_cursoScalarFieldEnum[]
  }


  /**
   * relation_aluno_curso findFirstOrThrow
   */
  export type relation_aluno_cursoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the relation_aluno_curso
     */
    select?: relation_aluno_cursoSelect<ExtArgs> | null
    /**
     * Filter, which relation_aluno_curso to fetch.
     */
    where?: relation_aluno_cursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of relation_aluno_cursos to fetch.
     */
    orderBy?: relation_aluno_cursoOrderByWithRelationInput | relation_aluno_cursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for relation_aluno_cursos.
     */
    cursor?: relation_aluno_cursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` relation_aluno_cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` relation_aluno_cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of relation_aluno_cursos.
     */
    distinct?: Relation_aluno_cursoScalarFieldEnum | Relation_aluno_cursoScalarFieldEnum[]
  }


  /**
   * relation_aluno_curso findMany
   */
  export type relation_aluno_cursoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the relation_aluno_curso
     */
    select?: relation_aluno_cursoSelect<ExtArgs> | null
    /**
     * Filter, which relation_aluno_cursos to fetch.
     */
    where?: relation_aluno_cursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of relation_aluno_cursos to fetch.
     */
    orderBy?: relation_aluno_cursoOrderByWithRelationInput | relation_aluno_cursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing relation_aluno_cursos.
     */
    cursor?: relation_aluno_cursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` relation_aluno_cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` relation_aluno_cursos.
     */
    skip?: number
    distinct?: Relation_aluno_cursoScalarFieldEnum | Relation_aluno_cursoScalarFieldEnum[]
  }


  /**
   * relation_aluno_curso create
   */
  export type relation_aluno_cursoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the relation_aluno_curso
     */
    select?: relation_aluno_cursoSelect<ExtArgs> | null
    /**
     * The data needed to create a relation_aluno_curso.
     */
    data: XOR<relation_aluno_cursoCreateInput, relation_aluno_cursoUncheckedCreateInput>
  }


  /**
   * relation_aluno_curso createMany
   */
  export type relation_aluno_cursoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many relation_aluno_cursos.
     */
    data: relation_aluno_cursoCreateManyInput | relation_aluno_cursoCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * relation_aluno_curso update
   */
  export type relation_aluno_cursoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the relation_aluno_curso
     */
    select?: relation_aluno_cursoSelect<ExtArgs> | null
    /**
     * The data needed to update a relation_aluno_curso.
     */
    data: XOR<relation_aluno_cursoUpdateInput, relation_aluno_cursoUncheckedUpdateInput>
    /**
     * Choose, which relation_aluno_curso to update.
     */
    where: relation_aluno_cursoWhereUniqueInput
  }


  /**
   * relation_aluno_curso updateMany
   */
  export type relation_aluno_cursoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update relation_aluno_cursos.
     */
    data: XOR<relation_aluno_cursoUpdateManyMutationInput, relation_aluno_cursoUncheckedUpdateManyInput>
    /**
     * Filter which relation_aluno_cursos to update
     */
    where?: relation_aluno_cursoWhereInput
  }


  /**
   * relation_aluno_curso upsert
   */
  export type relation_aluno_cursoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the relation_aluno_curso
     */
    select?: relation_aluno_cursoSelect<ExtArgs> | null
    /**
     * The filter to search for the relation_aluno_curso to update in case it exists.
     */
    where: relation_aluno_cursoWhereUniqueInput
    /**
     * In case the relation_aluno_curso found by the `where` argument doesn't exist, create a new relation_aluno_curso with this data.
     */
    create: XOR<relation_aluno_cursoCreateInput, relation_aluno_cursoUncheckedCreateInput>
    /**
     * In case the relation_aluno_curso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<relation_aluno_cursoUpdateInput, relation_aluno_cursoUncheckedUpdateInput>
  }


  /**
   * relation_aluno_curso delete
   */
  export type relation_aluno_cursoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the relation_aluno_curso
     */
    select?: relation_aluno_cursoSelect<ExtArgs> | null
    /**
     * Filter which relation_aluno_curso to delete.
     */
    where: relation_aluno_cursoWhereUniqueInput
  }


  /**
   * relation_aluno_curso deleteMany
   */
  export type relation_aluno_cursoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which relation_aluno_cursos to delete
     */
    where?: relation_aluno_cursoWhereInput
  }


  /**
   * relation_aluno_curso without action
   */
  export type relation_aluno_cursoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the relation_aluno_curso
     */
    select?: relation_aluno_cursoSelect<ExtArgs> | null
  }



  /**
   * Model progress_curso_aulas
   */

  export type AggregateProgress_curso_aulas = {
    _count: Progress_curso_aulasCountAggregateOutputType | null
    _min: Progress_curso_aulasMinAggregateOutputType | null
    _max: Progress_curso_aulasMaxAggregateOutputType | null
  }

  export type Progress_curso_aulasMinAggregateOutputType = {
    id: string | null
    id_aluno: string | null
    id_curso: string | null
    id_aula: string | null
    visualizado: boolean | null
  }

  export type Progress_curso_aulasMaxAggregateOutputType = {
    id: string | null
    id_aluno: string | null
    id_curso: string | null
    id_aula: string | null
    visualizado: boolean | null
  }

  export type Progress_curso_aulasCountAggregateOutputType = {
    id: number
    id_aluno: number
    id_curso: number
    id_aula: number
    visualizado: number
    _all: number
  }


  export type Progress_curso_aulasMinAggregateInputType = {
    id?: true
    id_aluno?: true
    id_curso?: true
    id_aula?: true
    visualizado?: true
  }

  export type Progress_curso_aulasMaxAggregateInputType = {
    id?: true
    id_aluno?: true
    id_curso?: true
    id_aula?: true
    visualizado?: true
  }

  export type Progress_curso_aulasCountAggregateInputType = {
    id?: true
    id_aluno?: true
    id_curso?: true
    id_aula?: true
    visualizado?: true
    _all?: true
  }

  export type Progress_curso_aulasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which progress_curso_aulas to aggregate.
     */
    where?: progress_curso_aulasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of progress_curso_aulas to fetch.
     */
    orderBy?: progress_curso_aulasOrderByWithRelationInput | progress_curso_aulasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: progress_curso_aulasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` progress_curso_aulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` progress_curso_aulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned progress_curso_aulas
    **/
    _count?: true | Progress_curso_aulasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Progress_curso_aulasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Progress_curso_aulasMaxAggregateInputType
  }

  export type GetProgress_curso_aulasAggregateType<T extends Progress_curso_aulasAggregateArgs> = {
        [P in keyof T & keyof AggregateProgress_curso_aulas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgress_curso_aulas[P]>
      : GetScalarType<T[P], AggregateProgress_curso_aulas[P]>
  }




  export type progress_curso_aulasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: progress_curso_aulasWhereInput
    orderBy?: progress_curso_aulasOrderByWithAggregationInput | progress_curso_aulasOrderByWithAggregationInput[]
    by: Progress_curso_aulasScalarFieldEnum[] | Progress_curso_aulasScalarFieldEnum
    having?: progress_curso_aulasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Progress_curso_aulasCountAggregateInputType | true
    _min?: Progress_curso_aulasMinAggregateInputType
    _max?: Progress_curso_aulasMaxAggregateInputType
  }

  export type Progress_curso_aulasGroupByOutputType = {
    id: string
    id_aluno: string
    id_curso: string
    id_aula: string
    visualizado: boolean
    _count: Progress_curso_aulasCountAggregateOutputType | null
    _min: Progress_curso_aulasMinAggregateOutputType | null
    _max: Progress_curso_aulasMaxAggregateOutputType | null
  }

  type GetProgress_curso_aulasGroupByPayload<T extends progress_curso_aulasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Progress_curso_aulasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Progress_curso_aulasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Progress_curso_aulasGroupByOutputType[P]>
            : GetScalarType<T[P], Progress_curso_aulasGroupByOutputType[P]>
        }
      >
    >


  export type progress_curso_aulasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_aluno?: boolean
    id_curso?: boolean
    id_aula?: boolean
    visualizado?: boolean
  }, ExtArgs["result"]["progress_curso_aulas"]>

  export type progress_curso_aulasSelectScalar = {
    id?: boolean
    id_aluno?: boolean
    id_curso?: boolean
    id_aula?: boolean
    visualizado?: boolean
  }


  export type $progress_curso_aulasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "progress_curso_aulas"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      id_aluno: string
      id_curso: string
      id_aula: string
      visualizado: boolean
    }, ExtArgs["result"]["progress_curso_aulas"]>
    composites: {}
  }


  type progress_curso_aulasGetPayload<S extends boolean | null | undefined | progress_curso_aulasDefaultArgs> = $Result.GetResult<Prisma.$progress_curso_aulasPayload, S>

  type progress_curso_aulasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<progress_curso_aulasFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Progress_curso_aulasCountAggregateInputType | true
    }

  export interface progress_curso_aulasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['progress_curso_aulas'], meta: { name: 'progress_curso_aulas' } }
    /**
     * Find zero or one Progress_curso_aulas that matches the filter.
     * @param {progress_curso_aulasFindUniqueArgs} args - Arguments to find a Progress_curso_aulas
     * @example
     * // Get one Progress_curso_aulas
     * const progress_curso_aulas = await prisma.progress_curso_aulas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends progress_curso_aulasFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, progress_curso_aulasFindUniqueArgs<ExtArgs>>
    ): Prisma__progress_curso_aulasClient<$Result.GetResult<Prisma.$progress_curso_aulasPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Progress_curso_aulas that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {progress_curso_aulasFindUniqueOrThrowArgs} args - Arguments to find a Progress_curso_aulas
     * @example
     * // Get one Progress_curso_aulas
     * const progress_curso_aulas = await prisma.progress_curso_aulas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends progress_curso_aulasFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, progress_curso_aulasFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__progress_curso_aulasClient<$Result.GetResult<Prisma.$progress_curso_aulasPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Progress_curso_aulas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progress_curso_aulasFindFirstArgs} args - Arguments to find a Progress_curso_aulas
     * @example
     * // Get one Progress_curso_aulas
     * const progress_curso_aulas = await prisma.progress_curso_aulas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends progress_curso_aulasFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, progress_curso_aulasFindFirstArgs<ExtArgs>>
    ): Prisma__progress_curso_aulasClient<$Result.GetResult<Prisma.$progress_curso_aulasPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Progress_curso_aulas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progress_curso_aulasFindFirstOrThrowArgs} args - Arguments to find a Progress_curso_aulas
     * @example
     * // Get one Progress_curso_aulas
     * const progress_curso_aulas = await prisma.progress_curso_aulas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends progress_curso_aulasFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, progress_curso_aulasFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__progress_curso_aulasClient<$Result.GetResult<Prisma.$progress_curso_aulasPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Progress_curso_aulas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progress_curso_aulasFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Progress_curso_aulas
     * const progress_curso_aulas = await prisma.progress_curso_aulas.findMany()
     * 
     * // Get first 10 Progress_curso_aulas
     * const progress_curso_aulas = await prisma.progress_curso_aulas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const progress_curso_aulasWithIdOnly = await prisma.progress_curso_aulas.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends progress_curso_aulasFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, progress_curso_aulasFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$progress_curso_aulasPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Progress_curso_aulas.
     * @param {progress_curso_aulasCreateArgs} args - Arguments to create a Progress_curso_aulas.
     * @example
     * // Create one Progress_curso_aulas
     * const Progress_curso_aulas = await prisma.progress_curso_aulas.create({
     *   data: {
     *     // ... data to create a Progress_curso_aulas
     *   }
     * })
     * 
    **/
    create<T extends progress_curso_aulasCreateArgs<ExtArgs>>(
      args: SelectSubset<T, progress_curso_aulasCreateArgs<ExtArgs>>
    ): Prisma__progress_curso_aulasClient<$Result.GetResult<Prisma.$progress_curso_aulasPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Progress_curso_aulas.
     *     @param {progress_curso_aulasCreateManyArgs} args - Arguments to create many Progress_curso_aulas.
     *     @example
     *     // Create many Progress_curso_aulas
     *     const progress_curso_aulas = await prisma.progress_curso_aulas.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends progress_curso_aulasCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, progress_curso_aulasCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Progress_curso_aulas.
     * @param {progress_curso_aulasDeleteArgs} args - Arguments to delete one Progress_curso_aulas.
     * @example
     * // Delete one Progress_curso_aulas
     * const Progress_curso_aulas = await prisma.progress_curso_aulas.delete({
     *   where: {
     *     // ... filter to delete one Progress_curso_aulas
     *   }
     * })
     * 
    **/
    delete<T extends progress_curso_aulasDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, progress_curso_aulasDeleteArgs<ExtArgs>>
    ): Prisma__progress_curso_aulasClient<$Result.GetResult<Prisma.$progress_curso_aulasPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Progress_curso_aulas.
     * @param {progress_curso_aulasUpdateArgs} args - Arguments to update one Progress_curso_aulas.
     * @example
     * // Update one Progress_curso_aulas
     * const progress_curso_aulas = await prisma.progress_curso_aulas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends progress_curso_aulasUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, progress_curso_aulasUpdateArgs<ExtArgs>>
    ): Prisma__progress_curso_aulasClient<$Result.GetResult<Prisma.$progress_curso_aulasPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Progress_curso_aulas.
     * @param {progress_curso_aulasDeleteManyArgs} args - Arguments to filter Progress_curso_aulas to delete.
     * @example
     * // Delete a few Progress_curso_aulas
     * const { count } = await prisma.progress_curso_aulas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends progress_curso_aulasDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, progress_curso_aulasDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Progress_curso_aulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progress_curso_aulasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Progress_curso_aulas
     * const progress_curso_aulas = await prisma.progress_curso_aulas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends progress_curso_aulasUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, progress_curso_aulasUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Progress_curso_aulas.
     * @param {progress_curso_aulasUpsertArgs} args - Arguments to update or create a Progress_curso_aulas.
     * @example
     * // Update or create a Progress_curso_aulas
     * const progress_curso_aulas = await prisma.progress_curso_aulas.upsert({
     *   create: {
     *     // ... data to create a Progress_curso_aulas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Progress_curso_aulas we want to update
     *   }
     * })
    **/
    upsert<T extends progress_curso_aulasUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, progress_curso_aulasUpsertArgs<ExtArgs>>
    ): Prisma__progress_curso_aulasClient<$Result.GetResult<Prisma.$progress_curso_aulasPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Progress_curso_aulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progress_curso_aulasCountArgs} args - Arguments to filter Progress_curso_aulas to count.
     * @example
     * // Count the number of Progress_curso_aulas
     * const count = await prisma.progress_curso_aulas.count({
     *   where: {
     *     // ... the filter for the Progress_curso_aulas we want to count
     *   }
     * })
    **/
    count<T extends progress_curso_aulasCountArgs>(
      args?: Subset<T, progress_curso_aulasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Progress_curso_aulasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Progress_curso_aulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Progress_curso_aulasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Progress_curso_aulasAggregateArgs>(args: Subset<T, Progress_curso_aulasAggregateArgs>): Prisma.PrismaPromise<GetProgress_curso_aulasAggregateType<T>>

    /**
     * Group by Progress_curso_aulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {progress_curso_aulasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends progress_curso_aulasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: progress_curso_aulasGroupByArgs['orderBy'] }
        : { orderBy?: progress_curso_aulasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, progress_curso_aulasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgress_curso_aulasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the progress_curso_aulas model
   */
  readonly fields: progress_curso_aulasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for progress_curso_aulas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__progress_curso_aulasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the progress_curso_aulas model
   */ 
  interface progress_curso_aulasFieldRefs {
    readonly id: FieldRef<"progress_curso_aulas", 'String'>
    readonly id_aluno: FieldRef<"progress_curso_aulas", 'String'>
    readonly id_curso: FieldRef<"progress_curso_aulas", 'String'>
    readonly id_aula: FieldRef<"progress_curso_aulas", 'String'>
    readonly visualizado: FieldRef<"progress_curso_aulas", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * progress_curso_aulas findUnique
   */
  export type progress_curso_aulasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progress_curso_aulas
     */
    select?: progress_curso_aulasSelect<ExtArgs> | null
    /**
     * Filter, which progress_curso_aulas to fetch.
     */
    where: progress_curso_aulasWhereUniqueInput
  }


  /**
   * progress_curso_aulas findUniqueOrThrow
   */
  export type progress_curso_aulasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progress_curso_aulas
     */
    select?: progress_curso_aulasSelect<ExtArgs> | null
    /**
     * Filter, which progress_curso_aulas to fetch.
     */
    where: progress_curso_aulasWhereUniqueInput
  }


  /**
   * progress_curso_aulas findFirst
   */
  export type progress_curso_aulasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progress_curso_aulas
     */
    select?: progress_curso_aulasSelect<ExtArgs> | null
    /**
     * Filter, which progress_curso_aulas to fetch.
     */
    where?: progress_curso_aulasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of progress_curso_aulas to fetch.
     */
    orderBy?: progress_curso_aulasOrderByWithRelationInput | progress_curso_aulasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for progress_curso_aulas.
     */
    cursor?: progress_curso_aulasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` progress_curso_aulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` progress_curso_aulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of progress_curso_aulas.
     */
    distinct?: Progress_curso_aulasScalarFieldEnum | Progress_curso_aulasScalarFieldEnum[]
  }


  /**
   * progress_curso_aulas findFirstOrThrow
   */
  export type progress_curso_aulasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progress_curso_aulas
     */
    select?: progress_curso_aulasSelect<ExtArgs> | null
    /**
     * Filter, which progress_curso_aulas to fetch.
     */
    where?: progress_curso_aulasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of progress_curso_aulas to fetch.
     */
    orderBy?: progress_curso_aulasOrderByWithRelationInput | progress_curso_aulasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for progress_curso_aulas.
     */
    cursor?: progress_curso_aulasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` progress_curso_aulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` progress_curso_aulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of progress_curso_aulas.
     */
    distinct?: Progress_curso_aulasScalarFieldEnum | Progress_curso_aulasScalarFieldEnum[]
  }


  /**
   * progress_curso_aulas findMany
   */
  export type progress_curso_aulasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progress_curso_aulas
     */
    select?: progress_curso_aulasSelect<ExtArgs> | null
    /**
     * Filter, which progress_curso_aulas to fetch.
     */
    where?: progress_curso_aulasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of progress_curso_aulas to fetch.
     */
    orderBy?: progress_curso_aulasOrderByWithRelationInput | progress_curso_aulasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing progress_curso_aulas.
     */
    cursor?: progress_curso_aulasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` progress_curso_aulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` progress_curso_aulas.
     */
    skip?: number
    distinct?: Progress_curso_aulasScalarFieldEnum | Progress_curso_aulasScalarFieldEnum[]
  }


  /**
   * progress_curso_aulas create
   */
  export type progress_curso_aulasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progress_curso_aulas
     */
    select?: progress_curso_aulasSelect<ExtArgs> | null
    /**
     * The data needed to create a progress_curso_aulas.
     */
    data: XOR<progress_curso_aulasCreateInput, progress_curso_aulasUncheckedCreateInput>
  }


  /**
   * progress_curso_aulas createMany
   */
  export type progress_curso_aulasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many progress_curso_aulas.
     */
    data: progress_curso_aulasCreateManyInput | progress_curso_aulasCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * progress_curso_aulas update
   */
  export type progress_curso_aulasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progress_curso_aulas
     */
    select?: progress_curso_aulasSelect<ExtArgs> | null
    /**
     * The data needed to update a progress_curso_aulas.
     */
    data: XOR<progress_curso_aulasUpdateInput, progress_curso_aulasUncheckedUpdateInput>
    /**
     * Choose, which progress_curso_aulas to update.
     */
    where: progress_curso_aulasWhereUniqueInput
  }


  /**
   * progress_curso_aulas updateMany
   */
  export type progress_curso_aulasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update progress_curso_aulas.
     */
    data: XOR<progress_curso_aulasUpdateManyMutationInput, progress_curso_aulasUncheckedUpdateManyInput>
    /**
     * Filter which progress_curso_aulas to update
     */
    where?: progress_curso_aulasWhereInput
  }


  /**
   * progress_curso_aulas upsert
   */
  export type progress_curso_aulasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progress_curso_aulas
     */
    select?: progress_curso_aulasSelect<ExtArgs> | null
    /**
     * The filter to search for the progress_curso_aulas to update in case it exists.
     */
    where: progress_curso_aulasWhereUniqueInput
    /**
     * In case the progress_curso_aulas found by the `where` argument doesn't exist, create a new progress_curso_aulas with this data.
     */
    create: XOR<progress_curso_aulasCreateInput, progress_curso_aulasUncheckedCreateInput>
    /**
     * In case the progress_curso_aulas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<progress_curso_aulasUpdateInput, progress_curso_aulasUncheckedUpdateInput>
  }


  /**
   * progress_curso_aulas delete
   */
  export type progress_curso_aulasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progress_curso_aulas
     */
    select?: progress_curso_aulasSelect<ExtArgs> | null
    /**
     * Filter which progress_curso_aulas to delete.
     */
    where: progress_curso_aulasWhereUniqueInput
  }


  /**
   * progress_curso_aulas deleteMany
   */
  export type progress_curso_aulasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which progress_curso_aulas to delete
     */
    where?: progress_curso_aulasWhereInput
  }


  /**
   * progress_curso_aulas without action
   */
  export type progress_curso_aulasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the progress_curso_aulas
     */
    select?: progress_curso_aulasSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AlunosScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    is_active: 'is_active',
    userType: 'userType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AlunosScalarFieldEnum = (typeof AlunosScalarFieldEnum)[keyof typeof AlunosScalarFieldEnum]


  export const ProfessoresScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    is_active: 'is_active',
    userType: 'userType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfessoresScalarFieldEnum = (typeof ProfessoresScalarFieldEnum)[keyof typeof ProfessoresScalarFieldEnum]


  export const CursosScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    banner: 'banner',
    is_active: 'is_active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CursosScalarFieldEnum = (typeof CursosScalarFieldEnum)[keyof typeof CursosScalarFieldEnum]


  export const AulasScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    is_active: 'is_active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AulasScalarFieldEnum = (typeof AulasScalarFieldEnum)[keyof typeof AulasScalarFieldEnum]


  export const Aulas_conteudoScalarFieldEnum: {
    id: 'id',
    id_aula: 'id_aula',
    nome: 'nome',
    conteudo: 'conteudo'
  };

  export type Aulas_conteudoScalarFieldEnum = (typeof Aulas_conteudoScalarFieldEnum)[keyof typeof Aulas_conteudoScalarFieldEnum]


  export const Relation_curso_aulasScalarFieldEnum: {
    id: 'id',
    id_curso: 'id_curso',
    id_aula: 'id_aula'
  };

  export type Relation_curso_aulasScalarFieldEnum = (typeof Relation_curso_aulasScalarFieldEnum)[keyof typeof Relation_curso_aulasScalarFieldEnum]


  export const Relation_aluno_cursoScalarFieldEnum: {
    id: 'id',
    id_aluno: 'id_aluno',
    id_curso: 'id_curso',
    status: 'status'
  };

  export type Relation_aluno_cursoScalarFieldEnum = (typeof Relation_aluno_cursoScalarFieldEnum)[keyof typeof Relation_aluno_cursoScalarFieldEnum]


  export const Progress_curso_aulasScalarFieldEnum: {
    id: 'id',
    id_aluno: 'id_aluno',
    id_curso: 'id_curso',
    id_aula: 'id_aula',
    visualizado: 'visualizado'
  };

  export type Progress_curso_aulasScalarFieldEnum = (typeof Progress_curso_aulasScalarFieldEnum)[keyof typeof Progress_curso_aulasScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'StatusEnum'
   */
  export type EnumStatusEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusEnum'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type alunosWhereInput = {
    AND?: alunosWhereInput | alunosWhereInput[]
    OR?: alunosWhereInput[]
    NOT?: alunosWhereInput | alunosWhereInput[]
    id?: StringFilter<"alunos"> | string
    nome?: StringFilter<"alunos"> | string
    email?: StringFilter<"alunos"> | string
    senha?: StringFilter<"alunos"> | string
    is_active?: BoolFilter<"alunos"> | boolean
    userType?: StringFilter<"alunos"> | string
    createdAt?: DateTimeFilter<"alunos"> | Date | string
    updatedAt?: DateTimeFilter<"alunos"> | Date | string
  }

  export type alunosOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    is_active?: SortOrder
    userType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type alunosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: alunosWhereInput | alunosWhereInput[]
    OR?: alunosWhereInput[]
    NOT?: alunosWhereInput | alunosWhereInput[]
    nome?: StringFilter<"alunos"> | string
    senha?: StringFilter<"alunos"> | string
    is_active?: BoolFilter<"alunos"> | boolean
    userType?: StringFilter<"alunos"> | string
    createdAt?: DateTimeFilter<"alunos"> | Date | string
    updatedAt?: DateTimeFilter<"alunos"> | Date | string
  }, "id" | "id" | "email">

  export type alunosOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    is_active?: SortOrder
    userType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: alunosCountOrderByAggregateInput
    _max?: alunosMaxOrderByAggregateInput
    _min?: alunosMinOrderByAggregateInput
  }

  export type alunosScalarWhereWithAggregatesInput = {
    AND?: alunosScalarWhereWithAggregatesInput | alunosScalarWhereWithAggregatesInput[]
    OR?: alunosScalarWhereWithAggregatesInput[]
    NOT?: alunosScalarWhereWithAggregatesInput | alunosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"alunos"> | string
    nome?: StringWithAggregatesFilter<"alunos"> | string
    email?: StringWithAggregatesFilter<"alunos"> | string
    senha?: StringWithAggregatesFilter<"alunos"> | string
    is_active?: BoolWithAggregatesFilter<"alunos"> | boolean
    userType?: StringWithAggregatesFilter<"alunos"> | string
    createdAt?: DateTimeWithAggregatesFilter<"alunos"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"alunos"> | Date | string
  }

  export type professoresWhereInput = {
    AND?: professoresWhereInput | professoresWhereInput[]
    OR?: professoresWhereInput[]
    NOT?: professoresWhereInput | professoresWhereInput[]
    id?: StringFilter<"professores"> | string
    nome?: StringFilter<"professores"> | string
    email?: StringFilter<"professores"> | string
    senha?: StringFilter<"professores"> | string
    is_active?: BoolFilter<"professores"> | boolean
    userType?: StringFilter<"professores"> | string
    createdAt?: DateTimeFilter<"professores"> | Date | string
    updatedAt?: DateTimeFilter<"professores"> | Date | string
  }

  export type professoresOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    is_active?: SortOrder
    userType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type professoresWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: professoresWhereInput | professoresWhereInput[]
    OR?: professoresWhereInput[]
    NOT?: professoresWhereInput | professoresWhereInput[]
    nome?: StringFilter<"professores"> | string
    senha?: StringFilter<"professores"> | string
    is_active?: BoolFilter<"professores"> | boolean
    userType?: StringFilter<"professores"> | string
    createdAt?: DateTimeFilter<"professores"> | Date | string
    updatedAt?: DateTimeFilter<"professores"> | Date | string
  }, "id" | "id" | "email">

  export type professoresOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    is_active?: SortOrder
    userType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: professoresCountOrderByAggregateInput
    _max?: professoresMaxOrderByAggregateInput
    _min?: professoresMinOrderByAggregateInput
  }

  export type professoresScalarWhereWithAggregatesInput = {
    AND?: professoresScalarWhereWithAggregatesInput | professoresScalarWhereWithAggregatesInput[]
    OR?: professoresScalarWhereWithAggregatesInput[]
    NOT?: professoresScalarWhereWithAggregatesInput | professoresScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"professores"> | string
    nome?: StringWithAggregatesFilter<"professores"> | string
    email?: StringWithAggregatesFilter<"professores"> | string
    senha?: StringWithAggregatesFilter<"professores"> | string
    is_active?: BoolWithAggregatesFilter<"professores"> | boolean
    userType?: StringWithAggregatesFilter<"professores"> | string
    createdAt?: DateTimeWithAggregatesFilter<"professores"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"professores"> | Date | string
  }

  export type cursosWhereInput = {
    AND?: cursosWhereInput | cursosWhereInput[]
    OR?: cursosWhereInput[]
    NOT?: cursosWhereInput | cursosWhereInput[]
    id?: StringFilter<"cursos"> | string
    nome?: StringFilter<"cursos"> | string
    descricao?: StringFilter<"cursos"> | string
    banner?: StringFilter<"cursos"> | string
    is_active?: BoolFilter<"cursos"> | boolean
    createdAt?: DateTimeFilter<"cursos"> | Date | string
    updatedAt?: DateTimeFilter<"cursos"> | Date | string
  }

  export type cursosOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    banner?: SortOrder
    is_active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type cursosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: cursosWhereInput | cursosWhereInput[]
    OR?: cursosWhereInput[]
    NOT?: cursosWhereInput | cursosWhereInput[]
    nome?: StringFilter<"cursos"> | string
    descricao?: StringFilter<"cursos"> | string
    banner?: StringFilter<"cursos"> | string
    is_active?: BoolFilter<"cursos"> | boolean
    createdAt?: DateTimeFilter<"cursos"> | Date | string
    updatedAt?: DateTimeFilter<"cursos"> | Date | string
  }, "id" | "id">

  export type cursosOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    banner?: SortOrder
    is_active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: cursosCountOrderByAggregateInput
    _max?: cursosMaxOrderByAggregateInput
    _min?: cursosMinOrderByAggregateInput
  }

  export type cursosScalarWhereWithAggregatesInput = {
    AND?: cursosScalarWhereWithAggregatesInput | cursosScalarWhereWithAggregatesInput[]
    OR?: cursosScalarWhereWithAggregatesInput[]
    NOT?: cursosScalarWhereWithAggregatesInput | cursosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"cursos"> | string
    nome?: StringWithAggregatesFilter<"cursos"> | string
    descricao?: StringWithAggregatesFilter<"cursos"> | string
    banner?: StringWithAggregatesFilter<"cursos"> | string
    is_active?: BoolWithAggregatesFilter<"cursos"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"cursos"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"cursos"> | Date | string
  }

  export type aulasWhereInput = {
    AND?: aulasWhereInput | aulasWhereInput[]
    OR?: aulasWhereInput[]
    NOT?: aulasWhereInput | aulasWhereInput[]
    id?: StringFilter<"aulas"> | string
    nome?: StringFilter<"aulas"> | string
    descricao?: StringFilter<"aulas"> | string
    is_active?: BoolFilter<"aulas"> | boolean
    createdAt?: DateTimeFilter<"aulas"> | Date | string
    updatedAt?: DateTimeFilter<"aulas"> | Date | string
  }

  export type aulasOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    is_active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type aulasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: aulasWhereInput | aulasWhereInput[]
    OR?: aulasWhereInput[]
    NOT?: aulasWhereInput | aulasWhereInput[]
    nome?: StringFilter<"aulas"> | string
    descricao?: StringFilter<"aulas"> | string
    is_active?: BoolFilter<"aulas"> | boolean
    createdAt?: DateTimeFilter<"aulas"> | Date | string
    updatedAt?: DateTimeFilter<"aulas"> | Date | string
  }, "id" | "id">

  export type aulasOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    is_active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: aulasCountOrderByAggregateInput
    _max?: aulasMaxOrderByAggregateInput
    _min?: aulasMinOrderByAggregateInput
  }

  export type aulasScalarWhereWithAggregatesInput = {
    AND?: aulasScalarWhereWithAggregatesInput | aulasScalarWhereWithAggregatesInput[]
    OR?: aulasScalarWhereWithAggregatesInput[]
    NOT?: aulasScalarWhereWithAggregatesInput | aulasScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"aulas"> | string
    nome?: StringWithAggregatesFilter<"aulas"> | string
    descricao?: StringWithAggregatesFilter<"aulas"> | string
    is_active?: BoolWithAggregatesFilter<"aulas"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"aulas"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"aulas"> | Date | string
  }

  export type aulas_conteudoWhereInput = {
    AND?: aulas_conteudoWhereInput | aulas_conteudoWhereInput[]
    OR?: aulas_conteudoWhereInput[]
    NOT?: aulas_conteudoWhereInput | aulas_conteudoWhereInput[]
    id?: StringFilter<"aulas_conteudo"> | string
    id_aula?: StringFilter<"aulas_conteudo"> | string
    nome?: StringFilter<"aulas_conteudo"> | string
    conteudo?: BytesFilter<"aulas_conteudo"> | Buffer
  }

  export type aulas_conteudoOrderByWithRelationInput = {
    id?: SortOrder
    id_aula?: SortOrder
    nome?: SortOrder
    conteudo?: SortOrder
  }

  export type aulas_conteudoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: aulas_conteudoWhereInput | aulas_conteudoWhereInput[]
    OR?: aulas_conteudoWhereInput[]
    NOT?: aulas_conteudoWhereInput | aulas_conteudoWhereInput[]
    id_aula?: StringFilter<"aulas_conteudo"> | string
    nome?: StringFilter<"aulas_conteudo"> | string
    conteudo?: BytesFilter<"aulas_conteudo"> | Buffer
  }, "id" | "id">

  export type aulas_conteudoOrderByWithAggregationInput = {
    id?: SortOrder
    id_aula?: SortOrder
    nome?: SortOrder
    conteudo?: SortOrder
    _count?: aulas_conteudoCountOrderByAggregateInput
    _max?: aulas_conteudoMaxOrderByAggregateInput
    _min?: aulas_conteudoMinOrderByAggregateInput
  }

  export type aulas_conteudoScalarWhereWithAggregatesInput = {
    AND?: aulas_conteudoScalarWhereWithAggregatesInput | aulas_conteudoScalarWhereWithAggregatesInput[]
    OR?: aulas_conteudoScalarWhereWithAggregatesInput[]
    NOT?: aulas_conteudoScalarWhereWithAggregatesInput | aulas_conteudoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"aulas_conteudo"> | string
    id_aula?: StringWithAggregatesFilter<"aulas_conteudo"> | string
    nome?: StringWithAggregatesFilter<"aulas_conteudo"> | string
    conteudo?: BytesWithAggregatesFilter<"aulas_conteudo"> | Buffer
  }

  export type relation_curso_aulasWhereInput = {
    AND?: relation_curso_aulasWhereInput | relation_curso_aulasWhereInput[]
    OR?: relation_curso_aulasWhereInput[]
    NOT?: relation_curso_aulasWhereInput | relation_curso_aulasWhereInput[]
    id?: StringFilter<"relation_curso_aulas"> | string
    id_curso?: StringFilter<"relation_curso_aulas"> | string
    id_aula?: StringFilter<"relation_curso_aulas"> | string
  }

  export type relation_curso_aulasOrderByWithRelationInput = {
    id?: SortOrder
    id_curso?: SortOrder
    id_aula?: SortOrder
  }

  export type relation_curso_aulasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: relation_curso_aulasWhereInput | relation_curso_aulasWhereInput[]
    OR?: relation_curso_aulasWhereInput[]
    NOT?: relation_curso_aulasWhereInput | relation_curso_aulasWhereInput[]
    id_curso?: StringFilter<"relation_curso_aulas"> | string
    id_aula?: StringFilter<"relation_curso_aulas"> | string
  }, "id" | "id">

  export type relation_curso_aulasOrderByWithAggregationInput = {
    id?: SortOrder
    id_curso?: SortOrder
    id_aula?: SortOrder
    _count?: relation_curso_aulasCountOrderByAggregateInput
    _max?: relation_curso_aulasMaxOrderByAggregateInput
    _min?: relation_curso_aulasMinOrderByAggregateInput
  }

  export type relation_curso_aulasScalarWhereWithAggregatesInput = {
    AND?: relation_curso_aulasScalarWhereWithAggregatesInput | relation_curso_aulasScalarWhereWithAggregatesInput[]
    OR?: relation_curso_aulasScalarWhereWithAggregatesInput[]
    NOT?: relation_curso_aulasScalarWhereWithAggregatesInput | relation_curso_aulasScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"relation_curso_aulas"> | string
    id_curso?: StringWithAggregatesFilter<"relation_curso_aulas"> | string
    id_aula?: StringWithAggregatesFilter<"relation_curso_aulas"> | string
  }

  export type relation_aluno_cursoWhereInput = {
    AND?: relation_aluno_cursoWhereInput | relation_aluno_cursoWhereInput[]
    OR?: relation_aluno_cursoWhereInput[]
    NOT?: relation_aluno_cursoWhereInput | relation_aluno_cursoWhereInput[]
    id?: StringFilter<"relation_aluno_curso"> | string
    id_aluno?: StringFilter<"relation_aluno_curso"> | string
    id_curso?: StringFilter<"relation_aluno_curso"> | string
    status?: EnumStatusEnumFilter<"relation_aluno_curso"> | $Enums.StatusEnum
  }

  export type relation_aluno_cursoOrderByWithRelationInput = {
    id?: SortOrder
    id_aluno?: SortOrder
    id_curso?: SortOrder
    status?: SortOrder
  }

  export type relation_aluno_cursoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: relation_aluno_cursoWhereInput | relation_aluno_cursoWhereInput[]
    OR?: relation_aluno_cursoWhereInput[]
    NOT?: relation_aluno_cursoWhereInput | relation_aluno_cursoWhereInput[]
    id_aluno?: StringFilter<"relation_aluno_curso"> | string
    id_curso?: StringFilter<"relation_aluno_curso"> | string
    status?: EnumStatusEnumFilter<"relation_aluno_curso"> | $Enums.StatusEnum
  }, "id" | "id">

  export type relation_aluno_cursoOrderByWithAggregationInput = {
    id?: SortOrder
    id_aluno?: SortOrder
    id_curso?: SortOrder
    status?: SortOrder
    _count?: relation_aluno_cursoCountOrderByAggregateInput
    _max?: relation_aluno_cursoMaxOrderByAggregateInput
    _min?: relation_aluno_cursoMinOrderByAggregateInput
  }

  export type relation_aluno_cursoScalarWhereWithAggregatesInput = {
    AND?: relation_aluno_cursoScalarWhereWithAggregatesInput | relation_aluno_cursoScalarWhereWithAggregatesInput[]
    OR?: relation_aluno_cursoScalarWhereWithAggregatesInput[]
    NOT?: relation_aluno_cursoScalarWhereWithAggregatesInput | relation_aluno_cursoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"relation_aluno_curso"> | string
    id_aluno?: StringWithAggregatesFilter<"relation_aluno_curso"> | string
    id_curso?: StringWithAggregatesFilter<"relation_aluno_curso"> | string
    status?: EnumStatusEnumWithAggregatesFilter<"relation_aluno_curso"> | $Enums.StatusEnum
  }

  export type progress_curso_aulasWhereInput = {
    AND?: progress_curso_aulasWhereInput | progress_curso_aulasWhereInput[]
    OR?: progress_curso_aulasWhereInput[]
    NOT?: progress_curso_aulasWhereInput | progress_curso_aulasWhereInput[]
    id?: StringFilter<"progress_curso_aulas"> | string
    id_aluno?: StringFilter<"progress_curso_aulas"> | string
    id_curso?: StringFilter<"progress_curso_aulas"> | string
    id_aula?: StringFilter<"progress_curso_aulas"> | string
    visualizado?: BoolFilter<"progress_curso_aulas"> | boolean
  }

  export type progress_curso_aulasOrderByWithRelationInput = {
    id?: SortOrder
    id_aluno?: SortOrder
    id_curso?: SortOrder
    id_aula?: SortOrder
    visualizado?: SortOrder
  }

  export type progress_curso_aulasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: progress_curso_aulasWhereInput | progress_curso_aulasWhereInput[]
    OR?: progress_curso_aulasWhereInput[]
    NOT?: progress_curso_aulasWhereInput | progress_curso_aulasWhereInput[]
    id_aluno?: StringFilter<"progress_curso_aulas"> | string
    id_curso?: StringFilter<"progress_curso_aulas"> | string
    id_aula?: StringFilter<"progress_curso_aulas"> | string
    visualizado?: BoolFilter<"progress_curso_aulas"> | boolean
  }, "id" | "id">

  export type progress_curso_aulasOrderByWithAggregationInput = {
    id?: SortOrder
    id_aluno?: SortOrder
    id_curso?: SortOrder
    id_aula?: SortOrder
    visualizado?: SortOrder
    _count?: progress_curso_aulasCountOrderByAggregateInput
    _max?: progress_curso_aulasMaxOrderByAggregateInput
    _min?: progress_curso_aulasMinOrderByAggregateInput
  }

  export type progress_curso_aulasScalarWhereWithAggregatesInput = {
    AND?: progress_curso_aulasScalarWhereWithAggregatesInput | progress_curso_aulasScalarWhereWithAggregatesInput[]
    OR?: progress_curso_aulasScalarWhereWithAggregatesInput[]
    NOT?: progress_curso_aulasScalarWhereWithAggregatesInput | progress_curso_aulasScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"progress_curso_aulas"> | string
    id_aluno?: StringWithAggregatesFilter<"progress_curso_aulas"> | string
    id_curso?: StringWithAggregatesFilter<"progress_curso_aulas"> | string
    id_aula?: StringWithAggregatesFilter<"progress_curso_aulas"> | string
    visualizado?: BoolWithAggregatesFilter<"progress_curso_aulas"> | boolean
  }

  export type alunosCreateInput = {
    id: string
    nome: string
    email: string
    senha: string
    is_active?: boolean
    userType?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type alunosUncheckedCreateInput = {
    id: string
    nome: string
    email: string
    senha: string
    is_active?: boolean
    userType?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type alunosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    userType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type alunosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    userType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type alunosCreateManyInput = {
    id: string
    nome: string
    email: string
    senha: string
    is_active?: boolean
    userType?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type alunosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    userType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type alunosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    userType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type professoresCreateInput = {
    id: string
    nome: string
    email: string
    senha: string
    is_active?: boolean
    userType?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type professoresUncheckedCreateInput = {
    id: string
    nome: string
    email: string
    senha: string
    is_active?: boolean
    userType?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type professoresUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    userType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type professoresUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    userType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type professoresCreateManyInput = {
    id: string
    nome: string
    email: string
    senha: string
    is_active?: boolean
    userType?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type professoresUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    userType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type professoresUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    userType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cursosCreateInput = {
    id: string
    nome: string
    descricao: string
    banner: string
    is_active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type cursosUncheckedCreateInput = {
    id: string
    nome: string
    descricao: string
    banner: string
    is_active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type cursosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    banner?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cursosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    banner?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cursosCreateManyInput = {
    id: string
    nome: string
    descricao: string
    banner: string
    is_active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type cursosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    banner?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cursosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    banner?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type aulasCreateInput = {
    id: string
    nome: string
    descricao: string
    is_active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type aulasUncheckedCreateInput = {
    id: string
    nome: string
    descricao: string
    is_active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type aulasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type aulasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type aulasCreateManyInput = {
    id: string
    nome: string
    descricao: string
    is_active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type aulasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type aulasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type aulas_conteudoCreateInput = {
    id: string
    id_aula: string
    nome: string
    conteudo: Buffer
  }

  export type aulas_conteudoUncheckedCreateInput = {
    id: string
    id_aula: string
    nome: string
    conteudo: Buffer
  }

  export type aulas_conteudoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_aula?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    conteudo?: BytesFieldUpdateOperationsInput | Buffer
  }

  export type aulas_conteudoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_aula?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    conteudo?: BytesFieldUpdateOperationsInput | Buffer
  }

  export type aulas_conteudoCreateManyInput = {
    id: string
    id_aula: string
    nome: string
    conteudo: Buffer
  }

  export type aulas_conteudoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_aula?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    conteudo?: BytesFieldUpdateOperationsInput | Buffer
  }

  export type aulas_conteudoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_aula?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    conteudo?: BytesFieldUpdateOperationsInput | Buffer
  }

  export type relation_curso_aulasCreateInput = {
    id: string
    id_curso: string
    id_aula: string
  }

  export type relation_curso_aulasUncheckedCreateInput = {
    id: string
    id_curso: string
    id_aula: string
  }

  export type relation_curso_aulasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_curso?: StringFieldUpdateOperationsInput | string
    id_aula?: StringFieldUpdateOperationsInput | string
  }

  export type relation_curso_aulasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_curso?: StringFieldUpdateOperationsInput | string
    id_aula?: StringFieldUpdateOperationsInput | string
  }

  export type relation_curso_aulasCreateManyInput = {
    id: string
    id_curso: string
    id_aula: string
  }

  export type relation_curso_aulasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_curso?: StringFieldUpdateOperationsInput | string
    id_aula?: StringFieldUpdateOperationsInput | string
  }

  export type relation_curso_aulasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_curso?: StringFieldUpdateOperationsInput | string
    id_aula?: StringFieldUpdateOperationsInput | string
  }

  export type relation_aluno_cursoCreateInput = {
    id: string
    id_aluno: string
    id_curso: string
    status: $Enums.StatusEnum
  }

  export type relation_aluno_cursoUncheckedCreateInput = {
    id: string
    id_aluno: string
    id_curso: string
    status: $Enums.StatusEnum
  }

  export type relation_aluno_cursoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_aluno?: StringFieldUpdateOperationsInput | string
    id_curso?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
  }

  export type relation_aluno_cursoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_aluno?: StringFieldUpdateOperationsInput | string
    id_curso?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
  }

  export type relation_aluno_cursoCreateManyInput = {
    id: string
    id_aluno: string
    id_curso: string
    status: $Enums.StatusEnum
  }

  export type relation_aluno_cursoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_aluno?: StringFieldUpdateOperationsInput | string
    id_curso?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
  }

  export type relation_aluno_cursoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_aluno?: StringFieldUpdateOperationsInput | string
    id_curso?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEnumFieldUpdateOperationsInput | $Enums.StatusEnum
  }

  export type progress_curso_aulasCreateInput = {
    id: string
    id_aluno: string
    id_curso: string
    id_aula: string
    visualizado?: boolean
  }

  export type progress_curso_aulasUncheckedCreateInput = {
    id: string
    id_aluno: string
    id_curso: string
    id_aula: string
    visualizado?: boolean
  }

  export type progress_curso_aulasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_aluno?: StringFieldUpdateOperationsInput | string
    id_curso?: StringFieldUpdateOperationsInput | string
    id_aula?: StringFieldUpdateOperationsInput | string
    visualizado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type progress_curso_aulasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_aluno?: StringFieldUpdateOperationsInput | string
    id_curso?: StringFieldUpdateOperationsInput | string
    id_aula?: StringFieldUpdateOperationsInput | string
    visualizado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type progress_curso_aulasCreateManyInput = {
    id: string
    id_aluno: string
    id_curso: string
    id_aula: string
    visualizado?: boolean
  }

  export type progress_curso_aulasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_aluno?: StringFieldUpdateOperationsInput | string
    id_curso?: StringFieldUpdateOperationsInput | string
    id_aula?: StringFieldUpdateOperationsInput | string
    visualizado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type progress_curso_aulasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_aluno?: StringFieldUpdateOperationsInput | string
    id_curso?: StringFieldUpdateOperationsInput | string
    id_aula?: StringFieldUpdateOperationsInput | string
    visualizado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type alunosCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    is_active?: SortOrder
    userType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type alunosMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    is_active?: SortOrder
    userType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type alunosMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    is_active?: SortOrder
    userType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type professoresCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    is_active?: SortOrder
    userType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type professoresMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    is_active?: SortOrder
    userType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type professoresMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    is_active?: SortOrder
    userType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type cursosCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    banner?: SortOrder
    is_active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type cursosMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    banner?: SortOrder
    is_active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type cursosMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    banner?: SortOrder
    is_active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type aulasCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    is_active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type aulasMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    is_active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type aulasMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    is_active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[]
    notIn?: Buffer[]
    not?: NestedBytesFilter<$PrismaModel> | Buffer
  }

  export type aulas_conteudoCountOrderByAggregateInput = {
    id?: SortOrder
    id_aula?: SortOrder
    nome?: SortOrder
    conteudo?: SortOrder
  }

  export type aulas_conteudoMaxOrderByAggregateInput = {
    id?: SortOrder
    id_aula?: SortOrder
    nome?: SortOrder
    conteudo?: SortOrder
  }

  export type aulas_conteudoMinOrderByAggregateInput = {
    id?: SortOrder
    id_aula?: SortOrder
    nome?: SortOrder
    conteudo?: SortOrder
  }

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[]
    notIn?: Buffer[]
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Buffer
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type relation_curso_aulasCountOrderByAggregateInput = {
    id?: SortOrder
    id_curso?: SortOrder
    id_aula?: SortOrder
  }

  export type relation_curso_aulasMaxOrderByAggregateInput = {
    id?: SortOrder
    id_curso?: SortOrder
    id_aula?: SortOrder
  }

  export type relation_curso_aulasMinOrderByAggregateInput = {
    id?: SortOrder
    id_curso?: SortOrder
    id_aula?: SortOrder
  }

  export type EnumStatusEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEnum | EnumStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.StatusEnum[]
    notIn?: $Enums.StatusEnum[]
    not?: NestedEnumStatusEnumFilter<$PrismaModel> | $Enums.StatusEnum
  }

  export type relation_aluno_cursoCountOrderByAggregateInput = {
    id?: SortOrder
    id_aluno?: SortOrder
    id_curso?: SortOrder
    status?: SortOrder
  }

  export type relation_aluno_cursoMaxOrderByAggregateInput = {
    id?: SortOrder
    id_aluno?: SortOrder
    id_curso?: SortOrder
    status?: SortOrder
  }

  export type relation_aluno_cursoMinOrderByAggregateInput = {
    id?: SortOrder
    id_aluno?: SortOrder
    id_curso?: SortOrder
    status?: SortOrder
  }

  export type EnumStatusEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEnum | EnumStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.StatusEnum[]
    notIn?: $Enums.StatusEnum[]
    not?: NestedEnumStatusEnumWithAggregatesFilter<$PrismaModel> | $Enums.StatusEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusEnumFilter<$PrismaModel>
    _max?: NestedEnumStatusEnumFilter<$PrismaModel>
  }

  export type progress_curso_aulasCountOrderByAggregateInput = {
    id?: SortOrder
    id_aluno?: SortOrder
    id_curso?: SortOrder
    id_aula?: SortOrder
    visualizado?: SortOrder
  }

  export type progress_curso_aulasMaxOrderByAggregateInput = {
    id?: SortOrder
    id_aluno?: SortOrder
    id_curso?: SortOrder
    id_aula?: SortOrder
    visualizado?: SortOrder
  }

  export type progress_curso_aulasMinOrderByAggregateInput = {
    id?: SortOrder
    id_aluno?: SortOrder
    id_curso?: SortOrder
    id_aula?: SortOrder
    visualizado?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Buffer
  }

  export type EnumStatusEnumFieldUpdateOperationsInput = {
    set?: $Enums.StatusEnum
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[]
    notIn?: Buffer[]
    not?: NestedBytesFilter<$PrismaModel> | Buffer
  }

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[]
    notIn?: Buffer[]
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Buffer
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type NestedEnumStatusEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEnum | EnumStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.StatusEnum[]
    notIn?: $Enums.StatusEnum[]
    not?: NestedEnumStatusEnumFilter<$PrismaModel> | $Enums.StatusEnum
  }

  export type NestedEnumStatusEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEnum | EnumStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.StatusEnum[]
    notIn?: $Enums.StatusEnum[]
    not?: NestedEnumStatusEnumWithAggregatesFilter<$PrismaModel> | $Enums.StatusEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusEnumFilter<$PrismaModel>
    _max?: NestedEnumStatusEnumFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use alunosDefaultArgs instead
     */
    export type alunosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = alunosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use professoresDefaultArgs instead
     */
    export type professoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = professoresDefaultArgs<ExtArgs>
    /**
     * @deprecated Use cursosDefaultArgs instead
     */
    export type cursosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = cursosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use aulasDefaultArgs instead
     */
    export type aulasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = aulasDefaultArgs<ExtArgs>
    /**
     * @deprecated Use aulas_conteudoDefaultArgs instead
     */
    export type aulas_conteudoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = aulas_conteudoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use relation_curso_aulasDefaultArgs instead
     */
    export type relation_curso_aulasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = relation_curso_aulasDefaultArgs<ExtArgs>
    /**
     * @deprecated Use relation_aluno_cursoDefaultArgs instead
     */
    export type relation_aluno_cursoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = relation_aluno_cursoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use progress_curso_aulasDefaultArgs instead
     */
    export type progress_curso_aulasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = progress_curso_aulasDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}