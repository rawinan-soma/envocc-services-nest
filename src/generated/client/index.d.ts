
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model group
 * 
 */
export type group = $Result.DefaultSelection<Prisma.$groupPayload>
/**
 * Model position
 * 
 */
export type position = $Result.DefaultSelection<Prisma.$positionPayload>
/**
 * Model position_level
 * 
 */
export type position_level = $Result.DefaultSelection<Prisma.$position_levelPayload>
/**
 * Model room
 * 
 */
export type room = $Result.DefaultSelection<Prisma.$roomPayload>
/**
 * Model room_booking
 * 
 */
export type room_booking = $Result.DefaultSelection<Prisma.$room_bookingPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Groups
 * const groups = await prisma.group.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Groups
   * const groups = await prisma.group.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.group`: Exposes CRUD operations for the **group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.groupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.position`: Exposes CRUD operations for the **position** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Positions
    * const positions = await prisma.position.findMany()
    * ```
    */
  get position(): Prisma.positionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.position_level`: Exposes CRUD operations for the **position_level** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Position_levels
    * const position_levels = await prisma.position_level.findMany()
    * ```
    */
  get position_level(): Prisma.position_levelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.roomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room_booking`: Exposes CRUD operations for the **room_booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Room_bookings
    * const room_bookings = await prisma.room_booking.findMany()
    * ```
    */
  get room_booking(): Prisma.room_bookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    group: 'group',
    position: 'position',
    position_level: 'position_level',
    room: 'room',
    room_booking: 'room_booking',
    user: 'user'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "group" | "position" | "position_level" | "room" | "room_booking" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      group: {
        payload: Prisma.$groupPayload<ExtArgs>
        fields: Prisma.groupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.groupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.groupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupPayload>
          }
          findFirst: {
            args: Prisma.groupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.groupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupPayload>
          }
          findMany: {
            args: Prisma.groupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupPayload>[]
          }
          create: {
            args: Prisma.groupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupPayload>
          }
          createMany: {
            args: Prisma.groupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.groupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupPayload>[]
          }
          delete: {
            args: Prisma.groupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupPayload>
          }
          update: {
            args: Prisma.groupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupPayload>
          }
          deleteMany: {
            args: Prisma.groupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.groupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.groupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupPayload>[]
          }
          upsert: {
            args: Prisma.groupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.groupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.groupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      position: {
        payload: Prisma.$positionPayload<ExtArgs>
        fields: Prisma.positionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.positionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$positionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.positionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$positionPayload>
          }
          findFirst: {
            args: Prisma.positionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$positionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.positionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$positionPayload>
          }
          findMany: {
            args: Prisma.positionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$positionPayload>[]
          }
          create: {
            args: Prisma.positionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$positionPayload>
          }
          createMany: {
            args: Prisma.positionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.positionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$positionPayload>[]
          }
          delete: {
            args: Prisma.positionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$positionPayload>
          }
          update: {
            args: Prisma.positionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$positionPayload>
          }
          deleteMany: {
            args: Prisma.positionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.positionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.positionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$positionPayload>[]
          }
          upsert: {
            args: Prisma.positionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$positionPayload>
          }
          aggregate: {
            args: Prisma.PositionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosition>
          }
          groupBy: {
            args: Prisma.positionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PositionGroupByOutputType>[]
          }
          count: {
            args: Prisma.positionCountArgs<ExtArgs>
            result: $Utils.Optional<PositionCountAggregateOutputType> | number
          }
        }
      }
      position_level: {
        payload: Prisma.$position_levelPayload<ExtArgs>
        fields: Prisma.position_levelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.position_levelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$position_levelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.position_levelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$position_levelPayload>
          }
          findFirst: {
            args: Prisma.position_levelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$position_levelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.position_levelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$position_levelPayload>
          }
          findMany: {
            args: Prisma.position_levelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$position_levelPayload>[]
          }
          create: {
            args: Prisma.position_levelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$position_levelPayload>
          }
          createMany: {
            args: Prisma.position_levelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.position_levelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$position_levelPayload>[]
          }
          delete: {
            args: Prisma.position_levelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$position_levelPayload>
          }
          update: {
            args: Prisma.position_levelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$position_levelPayload>
          }
          deleteMany: {
            args: Prisma.position_levelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.position_levelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.position_levelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$position_levelPayload>[]
          }
          upsert: {
            args: Prisma.position_levelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$position_levelPayload>
          }
          aggregate: {
            args: Prisma.Position_levelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosition_level>
          }
          groupBy: {
            args: Prisma.position_levelGroupByArgs<ExtArgs>
            result: $Utils.Optional<Position_levelGroupByOutputType>[]
          }
          count: {
            args: Prisma.position_levelCountArgs<ExtArgs>
            result: $Utils.Optional<Position_levelCountAggregateOutputType> | number
          }
        }
      }
      room: {
        payload: Prisma.$roomPayload<ExtArgs>
        fields: Prisma.roomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.roomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.roomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload>
          }
          findFirst: {
            args: Prisma.roomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.roomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload>
          }
          findMany: {
            args: Prisma.roomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload>[]
          }
          create: {
            args: Prisma.roomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload>
          }
          createMany: {
            args: Prisma.roomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.roomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload>[]
          }
          delete: {
            args: Prisma.roomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload>
          }
          update: {
            args: Prisma.roomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload>
          }
          deleteMany: {
            args: Prisma.roomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.roomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.roomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload>[]
          }
          upsert: {
            args: Prisma.roomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.roomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.roomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      room_booking: {
        payload: Prisma.$room_bookingPayload<ExtArgs>
        fields: Prisma.room_bookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.room_bookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_bookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.room_bookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_bookingPayload>
          }
          findFirst: {
            args: Prisma.room_bookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_bookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.room_bookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_bookingPayload>
          }
          findMany: {
            args: Prisma.room_bookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_bookingPayload>[]
          }
          create: {
            args: Prisma.room_bookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_bookingPayload>
          }
          createMany: {
            args: Prisma.room_bookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.room_bookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_bookingPayload>[]
          }
          delete: {
            args: Prisma.room_bookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_bookingPayload>
          }
          update: {
            args: Prisma.room_bookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_bookingPayload>
          }
          deleteMany: {
            args: Prisma.room_bookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.room_bookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.room_bookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_bookingPayload>[]
          }
          upsert: {
            args: Prisma.room_bookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_bookingPayload>
          }
          aggregate: {
            args: Prisma.Room_bookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom_booking>
          }
          groupBy: {
            args: Prisma.room_bookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<Room_bookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.room_bookingCountArgs<ExtArgs>
            result: $Utils.Optional<Room_bookingCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    group?: groupOmit
    position?: positionOmit
    position_level?: position_levelOmit
    room?: roomOmit
    room_booking?: room_bookingOmit
    user?: userOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    users: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | GroupCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
  }


  /**
   * Count Type PositionCountOutputType
   */

  export type PositionCountOutputType = {
    users: number
  }

  export type PositionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | PositionCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * PositionCountOutputType without action
   */
  export type PositionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionCountOutputType
     */
    select?: PositionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PositionCountOutputType without action
   */
  export type PositionCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
  }


  /**
   * Count Type Position_levelCountOutputType
   */

  export type Position_levelCountOutputType = {
    users: number
  }

  export type Position_levelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Position_levelCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * Position_levelCountOutputType without action
   */
  export type Position_levelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position_levelCountOutputType
     */
    select?: Position_levelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Position_levelCountOutputType without action
   */
  export type Position_levelCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    bookings: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | RoomCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: room_bookingWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bookings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: room_bookingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupAvgAggregateOutputType = {
    id: number | null
  }

  export type GroupSumAggregateOutputType = {
    id: number | null
  }

  export type GroupMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GroupMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type GroupAvgAggregateInputType = {
    id?: true
  }

  export type GroupSumAggregateInputType = {
    id?: true
  }

  export type GroupMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which group to aggregate.
     */
    where?: groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groups to fetch.
     */
    orderBy?: groupOrderByWithRelationInput | groupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type groupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: groupWhereInput
    orderBy?: groupOrderByWithAggregationInput | groupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: groupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _avg?: GroupAvgAggregateInputType
    _sum?: GroupSumAggregateInputType
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: number
    name: string
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends groupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type groupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    users?: boolean | group$usersArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type groupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["group"]>

  export type groupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["group"]>

  export type groupSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type groupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["group"]>
  export type groupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | group$usersArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type groupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type groupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $groupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "group"
    objects: {
      users: Prisma.$userPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type groupGetPayload<S extends boolean | null | undefined | groupDefaultArgs> = $Result.GetResult<Prisma.$groupPayload, S>

  type groupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<groupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface groupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['group'], meta: { name: 'group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {groupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends groupFindUniqueArgs>(args: SelectSubset<T, groupFindUniqueArgs<ExtArgs>>): Prisma__groupClient<$Result.GetResult<Prisma.$groupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {groupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends groupFindUniqueOrThrowArgs>(args: SelectSubset<T, groupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__groupClient<$Result.GetResult<Prisma.$groupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends groupFindFirstArgs>(args?: SelectSubset<T, groupFindFirstArgs<ExtArgs>>): Prisma__groupClient<$Result.GetResult<Prisma.$groupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends groupFindFirstOrThrowArgs>(args?: SelectSubset<T, groupFindFirstOrThrowArgs<ExtArgs>>): Prisma__groupClient<$Result.GetResult<Prisma.$groupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends groupFindManyArgs>(args?: SelectSubset<T, groupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$groupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group.
     * @param {groupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends groupCreateArgs>(args: SelectSubset<T, groupCreateArgs<ExtArgs>>): Prisma__groupClient<$Result.GetResult<Prisma.$groupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {groupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends groupCreateManyArgs>(args?: SelectSubset<T, groupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {groupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends groupCreateManyAndReturnArgs>(args?: SelectSubset<T, groupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$groupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group.
     * @param {groupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends groupDeleteArgs>(args: SelectSubset<T, groupDeleteArgs<ExtArgs>>): Prisma__groupClient<$Result.GetResult<Prisma.$groupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group.
     * @param {groupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends groupUpdateArgs>(args: SelectSubset<T, groupUpdateArgs<ExtArgs>>): Prisma__groupClient<$Result.GetResult<Prisma.$groupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {groupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends groupDeleteManyArgs>(args?: SelectSubset<T, groupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends groupUpdateManyArgs>(args: SelectSubset<T, groupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {groupUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends groupUpdateManyAndReturnArgs>(args: SelectSubset<T, groupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$groupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group.
     * @param {groupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends groupUpsertArgs>(args: SelectSubset<T, groupUpsertArgs<ExtArgs>>): Prisma__groupClient<$Result.GetResult<Prisma.$groupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends groupCountArgs>(
      args?: Subset<T, groupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupGroupByArgs} args - Group by arguments.
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
      T extends groupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: groupGroupByArgs['orderBy'] }
        : { orderBy?: groupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, groupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the group model
   */
  readonly fields: groupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__groupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends group$usersArgs<ExtArgs> = {}>(args?: Subset<T, group$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the group model
   */
  interface groupFieldRefs {
    readonly id: FieldRef<"group", 'Int'>
    readonly name: FieldRef<"group", 'String'>
  }
    

  // Custom InputTypes
  /**
   * group findUnique
   */
  export type groupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group
     */
    select?: groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group
     */
    omit?: groupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupInclude<ExtArgs> | null
    /**
     * Filter, which group to fetch.
     */
    where: groupWhereUniqueInput
  }

  /**
   * group findUniqueOrThrow
   */
  export type groupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group
     */
    select?: groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group
     */
    omit?: groupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupInclude<ExtArgs> | null
    /**
     * Filter, which group to fetch.
     */
    where: groupWhereUniqueInput
  }

  /**
   * group findFirst
   */
  export type groupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group
     */
    select?: groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group
     */
    omit?: groupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupInclude<ExtArgs> | null
    /**
     * Filter, which group to fetch.
     */
    where?: groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groups to fetch.
     */
    orderBy?: groupOrderByWithRelationInput | groupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for groups.
     */
    cursor?: groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * group findFirstOrThrow
   */
  export type groupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group
     */
    select?: groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group
     */
    omit?: groupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupInclude<ExtArgs> | null
    /**
     * Filter, which group to fetch.
     */
    where?: groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groups to fetch.
     */
    orderBy?: groupOrderByWithRelationInput | groupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for groups.
     */
    cursor?: groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * group findMany
   */
  export type groupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group
     */
    select?: groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group
     */
    omit?: groupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupInclude<ExtArgs> | null
    /**
     * Filter, which groups to fetch.
     */
    where?: groupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groups to fetch.
     */
    orderBy?: groupOrderByWithRelationInput | groupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing groups.
     */
    cursor?: groupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * group create
   */
  export type groupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group
     */
    select?: groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group
     */
    omit?: groupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupInclude<ExtArgs> | null
    /**
     * The data needed to create a group.
     */
    data: XOR<groupCreateInput, groupUncheckedCreateInput>
  }

  /**
   * group createMany
   */
  export type groupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many groups.
     */
    data: groupCreateManyInput | groupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * group createManyAndReturn
   */
  export type groupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group
     */
    select?: groupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the group
     */
    omit?: groupOmit<ExtArgs> | null
    /**
     * The data used to create many groups.
     */
    data: groupCreateManyInput | groupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * group update
   */
  export type groupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group
     */
    select?: groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group
     */
    omit?: groupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupInclude<ExtArgs> | null
    /**
     * The data needed to update a group.
     */
    data: XOR<groupUpdateInput, groupUncheckedUpdateInput>
    /**
     * Choose, which group to update.
     */
    where: groupWhereUniqueInput
  }

  /**
   * group updateMany
   */
  export type groupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update groups.
     */
    data: XOR<groupUpdateManyMutationInput, groupUncheckedUpdateManyInput>
    /**
     * Filter which groups to update
     */
    where?: groupWhereInput
    /**
     * Limit how many groups to update.
     */
    limit?: number
  }

  /**
   * group updateManyAndReturn
   */
  export type groupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group
     */
    select?: groupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the group
     */
    omit?: groupOmit<ExtArgs> | null
    /**
     * The data used to update groups.
     */
    data: XOR<groupUpdateManyMutationInput, groupUncheckedUpdateManyInput>
    /**
     * Filter which groups to update
     */
    where?: groupWhereInput
    /**
     * Limit how many groups to update.
     */
    limit?: number
  }

  /**
   * group upsert
   */
  export type groupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group
     */
    select?: groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group
     */
    omit?: groupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupInclude<ExtArgs> | null
    /**
     * The filter to search for the group to update in case it exists.
     */
    where: groupWhereUniqueInput
    /**
     * In case the group found by the `where` argument doesn't exist, create a new group with this data.
     */
    create: XOR<groupCreateInput, groupUncheckedCreateInput>
    /**
     * In case the group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<groupUpdateInput, groupUncheckedUpdateInput>
  }

  /**
   * group delete
   */
  export type groupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group
     */
    select?: groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group
     */
    omit?: groupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupInclude<ExtArgs> | null
    /**
     * Filter which group to delete.
     */
    where: groupWhereUniqueInput
  }

  /**
   * group deleteMany
   */
  export type groupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which groups to delete
     */
    where?: groupWhereInput
    /**
     * Limit how many groups to delete.
     */
    limit?: number
  }

  /**
   * group.users
   */
  export type group$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    cursor?: userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * group without action
   */
  export type groupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group
     */
    select?: groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group
     */
    omit?: groupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupInclude<ExtArgs> | null
  }


  /**
   * Model position
   */

  export type AggregatePosition = {
    _count: PositionCountAggregateOutputType | null
    _avg: PositionAvgAggregateOutputType | null
    _sum: PositionSumAggregateOutputType | null
    _min: PositionMinAggregateOutputType | null
    _max: PositionMaxAggregateOutputType | null
  }

  export type PositionAvgAggregateOutputType = {
    id: number | null
  }

  export type PositionSumAggregateOutputType = {
    id: number | null
  }

  export type PositionMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type PositionMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type PositionCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type PositionAvgAggregateInputType = {
    id?: true
  }

  export type PositionSumAggregateInputType = {
    id?: true
  }

  export type PositionMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type PositionMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type PositionCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type PositionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which position to aggregate.
     */
    where?: positionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of positions to fetch.
     */
    orderBy?: positionOrderByWithRelationInput | positionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: positionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned positions
    **/
    _count?: true | PositionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PositionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PositionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PositionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PositionMaxAggregateInputType
  }

  export type GetPositionAggregateType<T extends PositionAggregateArgs> = {
        [P in keyof T & keyof AggregatePosition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosition[P]>
      : GetScalarType<T[P], AggregatePosition[P]>
  }




  export type positionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: positionWhereInput
    orderBy?: positionOrderByWithAggregationInput | positionOrderByWithAggregationInput[]
    by: PositionScalarFieldEnum[] | PositionScalarFieldEnum
    having?: positionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PositionCountAggregateInputType | true
    _avg?: PositionAvgAggregateInputType
    _sum?: PositionSumAggregateInputType
    _min?: PositionMinAggregateInputType
    _max?: PositionMaxAggregateInputType
  }

  export type PositionGroupByOutputType = {
    id: number
    name: string
    _count: PositionCountAggregateOutputType | null
    _avg: PositionAvgAggregateOutputType | null
    _sum: PositionSumAggregateOutputType | null
    _min: PositionMinAggregateOutputType | null
    _max: PositionMaxAggregateOutputType | null
  }

  type GetPositionGroupByPayload<T extends positionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PositionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PositionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PositionGroupByOutputType[P]>
            : GetScalarType<T[P], PositionGroupByOutputType[P]>
        }
      >
    >


  export type positionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    users?: boolean | position$usersArgs<ExtArgs>
    _count?: boolean | PositionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["position"]>

  export type positionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["position"]>

  export type positionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["position"]>

  export type positionSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type positionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["position"]>
  export type positionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | position$usersArgs<ExtArgs>
    _count?: boolean | PositionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type positionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type positionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $positionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "position"
    objects: {
      users: Prisma.$userPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["position"]>
    composites: {}
  }

  type positionGetPayload<S extends boolean | null | undefined | positionDefaultArgs> = $Result.GetResult<Prisma.$positionPayload, S>

  type positionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<positionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PositionCountAggregateInputType | true
    }

  export interface positionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['position'], meta: { name: 'position' } }
    /**
     * Find zero or one Position that matches the filter.
     * @param {positionFindUniqueArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends positionFindUniqueArgs>(args: SelectSubset<T, positionFindUniqueArgs<ExtArgs>>): Prisma__positionClient<$Result.GetResult<Prisma.$positionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Position that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {positionFindUniqueOrThrowArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends positionFindUniqueOrThrowArgs>(args: SelectSubset<T, positionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__positionClient<$Result.GetResult<Prisma.$positionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Position that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {positionFindFirstArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends positionFindFirstArgs>(args?: SelectSubset<T, positionFindFirstArgs<ExtArgs>>): Prisma__positionClient<$Result.GetResult<Prisma.$positionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Position that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {positionFindFirstOrThrowArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends positionFindFirstOrThrowArgs>(args?: SelectSubset<T, positionFindFirstOrThrowArgs<ExtArgs>>): Prisma__positionClient<$Result.GetResult<Prisma.$positionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Positions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {positionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Positions
     * const positions = await prisma.position.findMany()
     * 
     * // Get first 10 Positions
     * const positions = await prisma.position.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const positionWithIdOnly = await prisma.position.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends positionFindManyArgs>(args?: SelectSubset<T, positionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$positionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Position.
     * @param {positionCreateArgs} args - Arguments to create a Position.
     * @example
     * // Create one Position
     * const Position = await prisma.position.create({
     *   data: {
     *     // ... data to create a Position
     *   }
     * })
     * 
     */
    create<T extends positionCreateArgs>(args: SelectSubset<T, positionCreateArgs<ExtArgs>>): Prisma__positionClient<$Result.GetResult<Prisma.$positionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Positions.
     * @param {positionCreateManyArgs} args - Arguments to create many Positions.
     * @example
     * // Create many Positions
     * const position = await prisma.position.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends positionCreateManyArgs>(args?: SelectSubset<T, positionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Positions and returns the data saved in the database.
     * @param {positionCreateManyAndReturnArgs} args - Arguments to create many Positions.
     * @example
     * // Create many Positions
     * const position = await prisma.position.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Positions and only return the `id`
     * const positionWithIdOnly = await prisma.position.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends positionCreateManyAndReturnArgs>(args?: SelectSubset<T, positionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$positionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Position.
     * @param {positionDeleteArgs} args - Arguments to delete one Position.
     * @example
     * // Delete one Position
     * const Position = await prisma.position.delete({
     *   where: {
     *     // ... filter to delete one Position
     *   }
     * })
     * 
     */
    delete<T extends positionDeleteArgs>(args: SelectSubset<T, positionDeleteArgs<ExtArgs>>): Prisma__positionClient<$Result.GetResult<Prisma.$positionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Position.
     * @param {positionUpdateArgs} args - Arguments to update one Position.
     * @example
     * // Update one Position
     * const position = await prisma.position.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends positionUpdateArgs>(args: SelectSubset<T, positionUpdateArgs<ExtArgs>>): Prisma__positionClient<$Result.GetResult<Prisma.$positionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Positions.
     * @param {positionDeleteManyArgs} args - Arguments to filter Positions to delete.
     * @example
     * // Delete a few Positions
     * const { count } = await prisma.position.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends positionDeleteManyArgs>(args?: SelectSubset<T, positionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {positionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Positions
     * const position = await prisma.position.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends positionUpdateManyArgs>(args: SelectSubset<T, positionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Positions and returns the data updated in the database.
     * @param {positionUpdateManyAndReturnArgs} args - Arguments to update many Positions.
     * @example
     * // Update many Positions
     * const position = await prisma.position.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Positions and only return the `id`
     * const positionWithIdOnly = await prisma.position.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends positionUpdateManyAndReturnArgs>(args: SelectSubset<T, positionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$positionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Position.
     * @param {positionUpsertArgs} args - Arguments to update or create a Position.
     * @example
     * // Update or create a Position
     * const position = await prisma.position.upsert({
     *   create: {
     *     // ... data to create a Position
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Position we want to update
     *   }
     * })
     */
    upsert<T extends positionUpsertArgs>(args: SelectSubset<T, positionUpsertArgs<ExtArgs>>): Prisma__positionClient<$Result.GetResult<Prisma.$positionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {positionCountArgs} args - Arguments to filter Positions to count.
     * @example
     * // Count the number of Positions
     * const count = await prisma.position.count({
     *   where: {
     *     // ... the filter for the Positions we want to count
     *   }
     * })
    **/
    count<T extends positionCountArgs>(
      args?: Subset<T, positionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PositionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PositionAggregateArgs>(args: Subset<T, PositionAggregateArgs>): Prisma.PrismaPromise<GetPositionAggregateType<T>>

    /**
     * Group by Position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {positionGroupByArgs} args - Group by arguments.
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
      T extends positionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: positionGroupByArgs['orderBy'] }
        : { orderBy?: positionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, positionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPositionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the position model
   */
  readonly fields: positionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for position.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__positionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends position$usersArgs<ExtArgs> = {}>(args?: Subset<T, position$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the position model
   */
  interface positionFieldRefs {
    readonly id: FieldRef<"position", 'Int'>
    readonly name: FieldRef<"position", 'String'>
  }
    

  // Custom InputTypes
  /**
   * position findUnique
   */
  export type positionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the position
     */
    select?: positionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the position
     */
    omit?: positionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: positionInclude<ExtArgs> | null
    /**
     * Filter, which position to fetch.
     */
    where: positionWhereUniqueInput
  }

  /**
   * position findUniqueOrThrow
   */
  export type positionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the position
     */
    select?: positionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the position
     */
    omit?: positionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: positionInclude<ExtArgs> | null
    /**
     * Filter, which position to fetch.
     */
    where: positionWhereUniqueInput
  }

  /**
   * position findFirst
   */
  export type positionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the position
     */
    select?: positionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the position
     */
    omit?: positionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: positionInclude<ExtArgs> | null
    /**
     * Filter, which position to fetch.
     */
    where?: positionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of positions to fetch.
     */
    orderBy?: positionOrderByWithRelationInput | positionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for positions.
     */
    cursor?: positionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of positions.
     */
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * position findFirstOrThrow
   */
  export type positionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the position
     */
    select?: positionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the position
     */
    omit?: positionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: positionInclude<ExtArgs> | null
    /**
     * Filter, which position to fetch.
     */
    where?: positionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of positions to fetch.
     */
    orderBy?: positionOrderByWithRelationInput | positionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for positions.
     */
    cursor?: positionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of positions.
     */
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * position findMany
   */
  export type positionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the position
     */
    select?: positionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the position
     */
    omit?: positionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: positionInclude<ExtArgs> | null
    /**
     * Filter, which positions to fetch.
     */
    where?: positionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of positions to fetch.
     */
    orderBy?: positionOrderByWithRelationInput | positionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing positions.
     */
    cursor?: positionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` positions.
     */
    skip?: number
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * position create
   */
  export type positionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the position
     */
    select?: positionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the position
     */
    omit?: positionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: positionInclude<ExtArgs> | null
    /**
     * The data needed to create a position.
     */
    data: XOR<positionCreateInput, positionUncheckedCreateInput>
  }

  /**
   * position createMany
   */
  export type positionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many positions.
     */
    data: positionCreateManyInput | positionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * position createManyAndReturn
   */
  export type positionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the position
     */
    select?: positionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the position
     */
    omit?: positionOmit<ExtArgs> | null
    /**
     * The data used to create many positions.
     */
    data: positionCreateManyInput | positionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * position update
   */
  export type positionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the position
     */
    select?: positionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the position
     */
    omit?: positionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: positionInclude<ExtArgs> | null
    /**
     * The data needed to update a position.
     */
    data: XOR<positionUpdateInput, positionUncheckedUpdateInput>
    /**
     * Choose, which position to update.
     */
    where: positionWhereUniqueInput
  }

  /**
   * position updateMany
   */
  export type positionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update positions.
     */
    data: XOR<positionUpdateManyMutationInput, positionUncheckedUpdateManyInput>
    /**
     * Filter which positions to update
     */
    where?: positionWhereInput
    /**
     * Limit how many positions to update.
     */
    limit?: number
  }

  /**
   * position updateManyAndReturn
   */
  export type positionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the position
     */
    select?: positionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the position
     */
    omit?: positionOmit<ExtArgs> | null
    /**
     * The data used to update positions.
     */
    data: XOR<positionUpdateManyMutationInput, positionUncheckedUpdateManyInput>
    /**
     * Filter which positions to update
     */
    where?: positionWhereInput
    /**
     * Limit how many positions to update.
     */
    limit?: number
  }

  /**
   * position upsert
   */
  export type positionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the position
     */
    select?: positionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the position
     */
    omit?: positionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: positionInclude<ExtArgs> | null
    /**
     * The filter to search for the position to update in case it exists.
     */
    where: positionWhereUniqueInput
    /**
     * In case the position found by the `where` argument doesn't exist, create a new position with this data.
     */
    create: XOR<positionCreateInput, positionUncheckedCreateInput>
    /**
     * In case the position was found with the provided `where` argument, update it with this data.
     */
    update: XOR<positionUpdateInput, positionUncheckedUpdateInput>
  }

  /**
   * position delete
   */
  export type positionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the position
     */
    select?: positionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the position
     */
    omit?: positionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: positionInclude<ExtArgs> | null
    /**
     * Filter which position to delete.
     */
    where: positionWhereUniqueInput
  }

  /**
   * position deleteMany
   */
  export type positionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which positions to delete
     */
    where?: positionWhereInput
    /**
     * Limit how many positions to delete.
     */
    limit?: number
  }

  /**
   * position.users
   */
  export type position$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    cursor?: userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * position without action
   */
  export type positionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the position
     */
    select?: positionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the position
     */
    omit?: positionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: positionInclude<ExtArgs> | null
  }


  /**
   * Model position_level
   */

  export type AggregatePosition_level = {
    _count: Position_levelCountAggregateOutputType | null
    _avg: Position_levelAvgAggregateOutputType | null
    _sum: Position_levelSumAggregateOutputType | null
    _min: Position_levelMinAggregateOutputType | null
    _max: Position_levelMaxAggregateOutputType | null
  }

  export type Position_levelAvgAggregateOutputType = {
    id: number | null
  }

  export type Position_levelSumAggregateOutputType = {
    id: number | null
  }

  export type Position_levelMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type Position_levelMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type Position_levelCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type Position_levelAvgAggregateInputType = {
    id?: true
  }

  export type Position_levelSumAggregateInputType = {
    id?: true
  }

  export type Position_levelMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type Position_levelMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type Position_levelCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type Position_levelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which position_level to aggregate.
     */
    where?: position_levelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of position_levels to fetch.
     */
    orderBy?: position_levelOrderByWithRelationInput | position_levelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: position_levelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` position_levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` position_levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned position_levels
    **/
    _count?: true | Position_levelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Position_levelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Position_levelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Position_levelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Position_levelMaxAggregateInputType
  }

  export type GetPosition_levelAggregateType<T extends Position_levelAggregateArgs> = {
        [P in keyof T & keyof AggregatePosition_level]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosition_level[P]>
      : GetScalarType<T[P], AggregatePosition_level[P]>
  }




  export type position_levelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: position_levelWhereInput
    orderBy?: position_levelOrderByWithAggregationInput | position_levelOrderByWithAggregationInput[]
    by: Position_levelScalarFieldEnum[] | Position_levelScalarFieldEnum
    having?: position_levelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Position_levelCountAggregateInputType | true
    _avg?: Position_levelAvgAggregateInputType
    _sum?: Position_levelSumAggregateInputType
    _min?: Position_levelMinAggregateInputType
    _max?: Position_levelMaxAggregateInputType
  }

  export type Position_levelGroupByOutputType = {
    id: number
    name: string
    _count: Position_levelCountAggregateOutputType | null
    _avg: Position_levelAvgAggregateOutputType | null
    _sum: Position_levelSumAggregateOutputType | null
    _min: Position_levelMinAggregateOutputType | null
    _max: Position_levelMaxAggregateOutputType | null
  }

  type GetPosition_levelGroupByPayload<T extends position_levelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Position_levelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Position_levelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Position_levelGroupByOutputType[P]>
            : GetScalarType<T[P], Position_levelGroupByOutputType[P]>
        }
      >
    >


  export type position_levelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    users?: boolean | position_level$usersArgs<ExtArgs>
    _count?: boolean | Position_levelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["position_level"]>

  export type position_levelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["position_level"]>

  export type position_levelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["position_level"]>

  export type position_levelSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type position_levelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["position_level"]>
  export type position_levelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | position_level$usersArgs<ExtArgs>
    _count?: boolean | Position_levelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type position_levelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type position_levelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $position_levelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "position_level"
    objects: {
      users: Prisma.$userPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["position_level"]>
    composites: {}
  }

  type position_levelGetPayload<S extends boolean | null | undefined | position_levelDefaultArgs> = $Result.GetResult<Prisma.$position_levelPayload, S>

  type position_levelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<position_levelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Position_levelCountAggregateInputType | true
    }

  export interface position_levelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['position_level'], meta: { name: 'position_level' } }
    /**
     * Find zero or one Position_level that matches the filter.
     * @param {position_levelFindUniqueArgs} args - Arguments to find a Position_level
     * @example
     * // Get one Position_level
     * const position_level = await prisma.position_level.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends position_levelFindUniqueArgs>(args: SelectSubset<T, position_levelFindUniqueArgs<ExtArgs>>): Prisma__position_levelClient<$Result.GetResult<Prisma.$position_levelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Position_level that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {position_levelFindUniqueOrThrowArgs} args - Arguments to find a Position_level
     * @example
     * // Get one Position_level
     * const position_level = await prisma.position_level.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends position_levelFindUniqueOrThrowArgs>(args: SelectSubset<T, position_levelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__position_levelClient<$Result.GetResult<Prisma.$position_levelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Position_level that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {position_levelFindFirstArgs} args - Arguments to find a Position_level
     * @example
     * // Get one Position_level
     * const position_level = await prisma.position_level.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends position_levelFindFirstArgs>(args?: SelectSubset<T, position_levelFindFirstArgs<ExtArgs>>): Prisma__position_levelClient<$Result.GetResult<Prisma.$position_levelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Position_level that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {position_levelFindFirstOrThrowArgs} args - Arguments to find a Position_level
     * @example
     * // Get one Position_level
     * const position_level = await prisma.position_level.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends position_levelFindFirstOrThrowArgs>(args?: SelectSubset<T, position_levelFindFirstOrThrowArgs<ExtArgs>>): Prisma__position_levelClient<$Result.GetResult<Prisma.$position_levelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Position_levels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {position_levelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Position_levels
     * const position_levels = await prisma.position_level.findMany()
     * 
     * // Get first 10 Position_levels
     * const position_levels = await prisma.position_level.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const position_levelWithIdOnly = await prisma.position_level.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends position_levelFindManyArgs>(args?: SelectSubset<T, position_levelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$position_levelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Position_level.
     * @param {position_levelCreateArgs} args - Arguments to create a Position_level.
     * @example
     * // Create one Position_level
     * const Position_level = await prisma.position_level.create({
     *   data: {
     *     // ... data to create a Position_level
     *   }
     * })
     * 
     */
    create<T extends position_levelCreateArgs>(args: SelectSubset<T, position_levelCreateArgs<ExtArgs>>): Prisma__position_levelClient<$Result.GetResult<Prisma.$position_levelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Position_levels.
     * @param {position_levelCreateManyArgs} args - Arguments to create many Position_levels.
     * @example
     * // Create many Position_levels
     * const position_level = await prisma.position_level.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends position_levelCreateManyArgs>(args?: SelectSubset<T, position_levelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Position_levels and returns the data saved in the database.
     * @param {position_levelCreateManyAndReturnArgs} args - Arguments to create many Position_levels.
     * @example
     * // Create many Position_levels
     * const position_level = await prisma.position_level.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Position_levels and only return the `id`
     * const position_levelWithIdOnly = await prisma.position_level.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends position_levelCreateManyAndReturnArgs>(args?: SelectSubset<T, position_levelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$position_levelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Position_level.
     * @param {position_levelDeleteArgs} args - Arguments to delete one Position_level.
     * @example
     * // Delete one Position_level
     * const Position_level = await prisma.position_level.delete({
     *   where: {
     *     // ... filter to delete one Position_level
     *   }
     * })
     * 
     */
    delete<T extends position_levelDeleteArgs>(args: SelectSubset<T, position_levelDeleteArgs<ExtArgs>>): Prisma__position_levelClient<$Result.GetResult<Prisma.$position_levelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Position_level.
     * @param {position_levelUpdateArgs} args - Arguments to update one Position_level.
     * @example
     * // Update one Position_level
     * const position_level = await prisma.position_level.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends position_levelUpdateArgs>(args: SelectSubset<T, position_levelUpdateArgs<ExtArgs>>): Prisma__position_levelClient<$Result.GetResult<Prisma.$position_levelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Position_levels.
     * @param {position_levelDeleteManyArgs} args - Arguments to filter Position_levels to delete.
     * @example
     * // Delete a few Position_levels
     * const { count } = await prisma.position_level.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends position_levelDeleteManyArgs>(args?: SelectSubset<T, position_levelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Position_levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {position_levelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Position_levels
     * const position_level = await prisma.position_level.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends position_levelUpdateManyArgs>(args: SelectSubset<T, position_levelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Position_levels and returns the data updated in the database.
     * @param {position_levelUpdateManyAndReturnArgs} args - Arguments to update many Position_levels.
     * @example
     * // Update many Position_levels
     * const position_level = await prisma.position_level.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Position_levels and only return the `id`
     * const position_levelWithIdOnly = await prisma.position_level.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends position_levelUpdateManyAndReturnArgs>(args: SelectSubset<T, position_levelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$position_levelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Position_level.
     * @param {position_levelUpsertArgs} args - Arguments to update or create a Position_level.
     * @example
     * // Update or create a Position_level
     * const position_level = await prisma.position_level.upsert({
     *   create: {
     *     // ... data to create a Position_level
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Position_level we want to update
     *   }
     * })
     */
    upsert<T extends position_levelUpsertArgs>(args: SelectSubset<T, position_levelUpsertArgs<ExtArgs>>): Prisma__position_levelClient<$Result.GetResult<Prisma.$position_levelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Position_levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {position_levelCountArgs} args - Arguments to filter Position_levels to count.
     * @example
     * // Count the number of Position_levels
     * const count = await prisma.position_level.count({
     *   where: {
     *     // ... the filter for the Position_levels we want to count
     *   }
     * })
    **/
    count<T extends position_levelCountArgs>(
      args?: Subset<T, position_levelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Position_levelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Position_level.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Position_levelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Position_levelAggregateArgs>(args: Subset<T, Position_levelAggregateArgs>): Prisma.PrismaPromise<GetPosition_levelAggregateType<T>>

    /**
     * Group by Position_level.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {position_levelGroupByArgs} args - Group by arguments.
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
      T extends position_levelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: position_levelGroupByArgs['orderBy'] }
        : { orderBy?: position_levelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, position_levelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPosition_levelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the position_level model
   */
  readonly fields: position_levelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for position_level.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__position_levelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends position_level$usersArgs<ExtArgs> = {}>(args?: Subset<T, position_level$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the position_level model
   */
  interface position_levelFieldRefs {
    readonly id: FieldRef<"position_level", 'Int'>
    readonly name: FieldRef<"position_level", 'String'>
  }
    

  // Custom InputTypes
  /**
   * position_level findUnique
   */
  export type position_levelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the position_level
     */
    select?: position_levelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the position_level
     */
    omit?: position_levelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: position_levelInclude<ExtArgs> | null
    /**
     * Filter, which position_level to fetch.
     */
    where: position_levelWhereUniqueInput
  }

  /**
   * position_level findUniqueOrThrow
   */
  export type position_levelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the position_level
     */
    select?: position_levelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the position_level
     */
    omit?: position_levelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: position_levelInclude<ExtArgs> | null
    /**
     * Filter, which position_level to fetch.
     */
    where: position_levelWhereUniqueInput
  }

  /**
   * position_level findFirst
   */
  export type position_levelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the position_level
     */
    select?: position_levelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the position_level
     */
    omit?: position_levelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: position_levelInclude<ExtArgs> | null
    /**
     * Filter, which position_level to fetch.
     */
    where?: position_levelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of position_levels to fetch.
     */
    orderBy?: position_levelOrderByWithRelationInput | position_levelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for position_levels.
     */
    cursor?: position_levelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` position_levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` position_levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of position_levels.
     */
    distinct?: Position_levelScalarFieldEnum | Position_levelScalarFieldEnum[]
  }

  /**
   * position_level findFirstOrThrow
   */
  export type position_levelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the position_level
     */
    select?: position_levelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the position_level
     */
    omit?: position_levelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: position_levelInclude<ExtArgs> | null
    /**
     * Filter, which position_level to fetch.
     */
    where?: position_levelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of position_levels to fetch.
     */
    orderBy?: position_levelOrderByWithRelationInput | position_levelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for position_levels.
     */
    cursor?: position_levelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` position_levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` position_levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of position_levels.
     */
    distinct?: Position_levelScalarFieldEnum | Position_levelScalarFieldEnum[]
  }

  /**
   * position_level findMany
   */
  export type position_levelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the position_level
     */
    select?: position_levelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the position_level
     */
    omit?: position_levelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: position_levelInclude<ExtArgs> | null
    /**
     * Filter, which position_levels to fetch.
     */
    where?: position_levelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of position_levels to fetch.
     */
    orderBy?: position_levelOrderByWithRelationInput | position_levelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing position_levels.
     */
    cursor?: position_levelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` position_levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` position_levels.
     */
    skip?: number
    distinct?: Position_levelScalarFieldEnum | Position_levelScalarFieldEnum[]
  }

  /**
   * position_level create
   */
  export type position_levelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the position_level
     */
    select?: position_levelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the position_level
     */
    omit?: position_levelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: position_levelInclude<ExtArgs> | null
    /**
     * The data needed to create a position_level.
     */
    data: XOR<position_levelCreateInput, position_levelUncheckedCreateInput>
  }

  /**
   * position_level createMany
   */
  export type position_levelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many position_levels.
     */
    data: position_levelCreateManyInput | position_levelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * position_level createManyAndReturn
   */
  export type position_levelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the position_level
     */
    select?: position_levelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the position_level
     */
    omit?: position_levelOmit<ExtArgs> | null
    /**
     * The data used to create many position_levels.
     */
    data: position_levelCreateManyInput | position_levelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * position_level update
   */
  export type position_levelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the position_level
     */
    select?: position_levelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the position_level
     */
    omit?: position_levelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: position_levelInclude<ExtArgs> | null
    /**
     * The data needed to update a position_level.
     */
    data: XOR<position_levelUpdateInput, position_levelUncheckedUpdateInput>
    /**
     * Choose, which position_level to update.
     */
    where: position_levelWhereUniqueInput
  }

  /**
   * position_level updateMany
   */
  export type position_levelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update position_levels.
     */
    data: XOR<position_levelUpdateManyMutationInput, position_levelUncheckedUpdateManyInput>
    /**
     * Filter which position_levels to update
     */
    where?: position_levelWhereInput
    /**
     * Limit how many position_levels to update.
     */
    limit?: number
  }

  /**
   * position_level updateManyAndReturn
   */
  export type position_levelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the position_level
     */
    select?: position_levelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the position_level
     */
    omit?: position_levelOmit<ExtArgs> | null
    /**
     * The data used to update position_levels.
     */
    data: XOR<position_levelUpdateManyMutationInput, position_levelUncheckedUpdateManyInput>
    /**
     * Filter which position_levels to update
     */
    where?: position_levelWhereInput
    /**
     * Limit how many position_levels to update.
     */
    limit?: number
  }

  /**
   * position_level upsert
   */
  export type position_levelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the position_level
     */
    select?: position_levelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the position_level
     */
    omit?: position_levelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: position_levelInclude<ExtArgs> | null
    /**
     * The filter to search for the position_level to update in case it exists.
     */
    where: position_levelWhereUniqueInput
    /**
     * In case the position_level found by the `where` argument doesn't exist, create a new position_level with this data.
     */
    create: XOR<position_levelCreateInput, position_levelUncheckedCreateInput>
    /**
     * In case the position_level was found with the provided `where` argument, update it with this data.
     */
    update: XOR<position_levelUpdateInput, position_levelUncheckedUpdateInput>
  }

  /**
   * position_level delete
   */
  export type position_levelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the position_level
     */
    select?: position_levelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the position_level
     */
    omit?: position_levelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: position_levelInclude<ExtArgs> | null
    /**
     * Filter which position_level to delete.
     */
    where: position_levelWhereUniqueInput
  }

  /**
   * position_level deleteMany
   */
  export type position_levelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which position_levels to delete
     */
    where?: position_levelWhereInput
    /**
     * Limit how many position_levels to delete.
     */
    limit?: number
  }

  /**
   * position_level.users
   */
  export type position_level$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    cursor?: userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * position_level without action
   */
  export type position_levelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the position_level
     */
    select?: position_levelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the position_level
     */
    omit?: position_levelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: position_levelInclude<ExtArgs> | null
  }


  /**
   * Model room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    id: number | null
    capacity: number | null
  }

  export type RoomSumAggregateOutputType = {
    id: number | null
    capacity: number | null
  }

  export type RoomMinAggregateOutputType = {
    id: number | null
    name: string | null
    image_url: string | null
    capacity: number | null
    has_equipment: boolean | null
  }

  export type RoomMaxAggregateOutputType = {
    id: number | null
    name: string | null
    image_url: string | null
    capacity: number | null
    has_equipment: boolean | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    name: number
    image_url: number
    capacity: number
    has_equipment: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    id?: true
    capacity?: true
  }

  export type RoomSumAggregateInputType = {
    id?: true
    capacity?: true
  }

  export type RoomMinAggregateInputType = {
    id?: true
    name?: true
    image_url?: true
    capacity?: true
    has_equipment?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    name?: true
    image_url?: true
    capacity?: true
    has_equipment?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    name?: true
    image_url?: true
    capacity?: true
    has_equipment?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which room to aggregate.
     */
    where?: roomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: roomOrderByWithRelationInput | roomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: roomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type roomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roomWhereInput
    orderBy?: roomOrderByWithAggregationInput | roomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: roomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: number
    name: string
    image_url: string
    capacity: number
    has_equipment: boolean
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends roomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type roomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image_url?: boolean
    capacity?: boolean
    has_equipment?: boolean
    bookings?: boolean | room$bookingsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type roomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image_url?: boolean
    capacity?: boolean
    has_equipment?: boolean
  }, ExtArgs["result"]["room"]>

  export type roomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image_url?: boolean
    capacity?: boolean
    has_equipment?: boolean
  }, ExtArgs["result"]["room"]>

  export type roomSelectScalar = {
    id?: boolean
    name?: boolean
    image_url?: boolean
    capacity?: boolean
    has_equipment?: boolean
  }

  export type roomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "image_url" | "capacity" | "has_equipment", ExtArgs["result"]["room"]>
  export type roomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | room$bookingsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type roomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type roomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $roomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "room"
    objects: {
      bookings: Prisma.$room_bookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      image_url: string
      capacity: number
      has_equipment: boolean
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type roomGetPayload<S extends boolean | null | undefined | roomDefaultArgs> = $Result.GetResult<Prisma.$roomPayload, S>

  type roomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<roomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface roomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['room'], meta: { name: 'room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {roomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends roomFindUniqueArgs>(args: SelectSubset<T, roomFindUniqueArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {roomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends roomFindUniqueOrThrowArgs>(args: SelectSubset<T, roomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends roomFindFirstArgs>(args?: SelectSubset<T, roomFindFirstArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends roomFindFirstOrThrowArgs>(args?: SelectSubset<T, roomFindFirstOrThrowArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends roomFindManyArgs>(args?: SelectSubset<T, roomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {roomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends roomCreateArgs>(args: SelectSubset<T, roomCreateArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {roomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends roomCreateManyArgs>(args?: SelectSubset<T, roomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {roomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends roomCreateManyAndReturnArgs>(args?: SelectSubset<T, roomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Room.
     * @param {roomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends roomDeleteArgs>(args: SelectSubset<T, roomDeleteArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {roomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends roomUpdateArgs>(args: SelectSubset<T, roomUpdateArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {roomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends roomDeleteManyArgs>(args?: SelectSubset<T, roomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends roomUpdateManyArgs>(args: SelectSubset<T, roomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {roomUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends roomUpdateManyAndReturnArgs>(args: SelectSubset<T, roomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Room.
     * @param {roomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends roomUpsertArgs>(args: SelectSubset<T, roomUpsertArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends roomCountArgs>(
      args?: Subset<T, roomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomGroupByArgs} args - Group by arguments.
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
      T extends roomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: roomGroupByArgs['orderBy'] }
        : { orderBy?: roomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, roomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the room model
   */
  readonly fields: roomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__roomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends room$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, room$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$room_bookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the room model
   */
  interface roomFieldRefs {
    readonly id: FieldRef<"room", 'Int'>
    readonly name: FieldRef<"room", 'String'>
    readonly image_url: FieldRef<"room", 'String'>
    readonly capacity: FieldRef<"room", 'Int'>
    readonly has_equipment: FieldRef<"room", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * room findUnique
   */
  export type roomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * Filter, which room to fetch.
     */
    where: roomWhereUniqueInput
  }

  /**
   * room findUniqueOrThrow
   */
  export type roomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * Filter, which room to fetch.
     */
    where: roomWhereUniqueInput
  }

  /**
   * room findFirst
   */
  export type roomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * Filter, which room to fetch.
     */
    where?: roomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: roomOrderByWithRelationInput | roomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rooms.
     */
    cursor?: roomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * room findFirstOrThrow
   */
  export type roomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * Filter, which room to fetch.
     */
    where?: roomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: roomOrderByWithRelationInput | roomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rooms.
     */
    cursor?: roomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * room findMany
   */
  export type roomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * Filter, which rooms to fetch.
     */
    where?: roomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: roomOrderByWithRelationInput | roomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rooms.
     */
    cursor?: roomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * room create
   */
  export type roomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * The data needed to create a room.
     */
    data: XOR<roomCreateInput, roomUncheckedCreateInput>
  }

  /**
   * room createMany
   */
  export type roomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rooms.
     */
    data: roomCreateManyInput | roomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * room createManyAndReturn
   */
  export type roomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * The data used to create many rooms.
     */
    data: roomCreateManyInput | roomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * room update
   */
  export type roomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * The data needed to update a room.
     */
    data: XOR<roomUpdateInput, roomUncheckedUpdateInput>
    /**
     * Choose, which room to update.
     */
    where: roomWhereUniqueInput
  }

  /**
   * room updateMany
   */
  export type roomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rooms.
     */
    data: XOR<roomUpdateManyMutationInput, roomUncheckedUpdateManyInput>
    /**
     * Filter which rooms to update
     */
    where?: roomWhereInput
    /**
     * Limit how many rooms to update.
     */
    limit?: number
  }

  /**
   * room updateManyAndReturn
   */
  export type roomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * The data used to update rooms.
     */
    data: XOR<roomUpdateManyMutationInput, roomUncheckedUpdateManyInput>
    /**
     * Filter which rooms to update
     */
    where?: roomWhereInput
    /**
     * Limit how many rooms to update.
     */
    limit?: number
  }

  /**
   * room upsert
   */
  export type roomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * The filter to search for the room to update in case it exists.
     */
    where: roomWhereUniqueInput
    /**
     * In case the room found by the `where` argument doesn't exist, create a new room with this data.
     */
    create: XOR<roomCreateInput, roomUncheckedCreateInput>
    /**
     * In case the room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<roomUpdateInput, roomUncheckedUpdateInput>
  }

  /**
   * room delete
   */
  export type roomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    /**
     * Filter which room to delete.
     */
    where: roomWhereUniqueInput
  }

  /**
   * room deleteMany
   */
  export type roomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rooms to delete
     */
    where?: roomWhereInput
    /**
     * Limit how many rooms to delete.
     */
    limit?: number
  }

  /**
   * room.bookings
   */
  export type room$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_booking
     */
    select?: room_bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_booking
     */
    omit?: room_bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_bookingInclude<ExtArgs> | null
    where?: room_bookingWhereInput
    orderBy?: room_bookingOrderByWithRelationInput | room_bookingOrderByWithRelationInput[]
    cursor?: room_bookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Room_bookingScalarFieldEnum | Room_bookingScalarFieldEnum[]
  }

  /**
   * room without action
   */
  export type roomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
  }


  /**
   * Model room_booking
   */

  export type AggregateRoom_booking = {
    _count: Room_bookingCountAggregateOutputType | null
    _avg: Room_bookingAvgAggregateOutputType | null
    _sum: Room_bookingSumAggregateOutputType | null
    _min: Room_bookingMinAggregateOutputType | null
    _max: Room_bookingMaxAggregateOutputType | null
  }

  export type Room_bookingAvgAggregateOutputType = {
    user: number | null
    room: number | null
    attendees: number | null
  }

  export type Room_bookingSumAggregateOutputType = {
    user: number | null
    room: number | null
    attendees: number | null
  }

  export type Room_bookingMinAggregateOutputType = {
    id: string | null
    user: number | null
    room: number | null
    meeting_title: string | null
    attendees: number | null
    start_datetime: Date | null
    end_datetime: Date | null
    need_equipment: boolean | null
    notes: string | null
  }

  export type Room_bookingMaxAggregateOutputType = {
    id: string | null
    user: number | null
    room: number | null
    meeting_title: string | null
    attendees: number | null
    start_datetime: Date | null
    end_datetime: Date | null
    need_equipment: boolean | null
    notes: string | null
  }

  export type Room_bookingCountAggregateOutputType = {
    id: number
    user: number
    room: number
    meeting_title: number
    attendees: number
    start_datetime: number
    end_datetime: number
    need_equipment: number
    notes: number
    _all: number
  }


  export type Room_bookingAvgAggregateInputType = {
    user?: true
    room?: true
    attendees?: true
  }

  export type Room_bookingSumAggregateInputType = {
    user?: true
    room?: true
    attendees?: true
  }

  export type Room_bookingMinAggregateInputType = {
    id?: true
    user?: true
    room?: true
    meeting_title?: true
    attendees?: true
    start_datetime?: true
    end_datetime?: true
    need_equipment?: true
    notes?: true
  }

  export type Room_bookingMaxAggregateInputType = {
    id?: true
    user?: true
    room?: true
    meeting_title?: true
    attendees?: true
    start_datetime?: true
    end_datetime?: true
    need_equipment?: true
    notes?: true
  }

  export type Room_bookingCountAggregateInputType = {
    id?: true
    user?: true
    room?: true
    meeting_title?: true
    attendees?: true
    start_datetime?: true
    end_datetime?: true
    need_equipment?: true
    notes?: true
    _all?: true
  }

  export type Room_bookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which room_booking to aggregate.
     */
    where?: room_bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of room_bookings to fetch.
     */
    orderBy?: room_bookingOrderByWithRelationInput | room_bookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: room_bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` room_bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` room_bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned room_bookings
    **/
    _count?: true | Room_bookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Room_bookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Room_bookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Room_bookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Room_bookingMaxAggregateInputType
  }

  export type GetRoom_bookingAggregateType<T extends Room_bookingAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom_booking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom_booking[P]>
      : GetScalarType<T[P], AggregateRoom_booking[P]>
  }




  export type room_bookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: room_bookingWhereInput
    orderBy?: room_bookingOrderByWithAggregationInput | room_bookingOrderByWithAggregationInput[]
    by: Room_bookingScalarFieldEnum[] | Room_bookingScalarFieldEnum
    having?: room_bookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Room_bookingCountAggregateInputType | true
    _avg?: Room_bookingAvgAggregateInputType
    _sum?: Room_bookingSumAggregateInputType
    _min?: Room_bookingMinAggregateInputType
    _max?: Room_bookingMaxAggregateInputType
  }

  export type Room_bookingGroupByOutputType = {
    id: string
    user: number
    room: number
    meeting_title: string
    attendees: number
    start_datetime: Date
    end_datetime: Date
    need_equipment: boolean
    notes: string | null
    _count: Room_bookingCountAggregateOutputType | null
    _avg: Room_bookingAvgAggregateOutputType | null
    _sum: Room_bookingSumAggregateOutputType | null
    _min: Room_bookingMinAggregateOutputType | null
    _max: Room_bookingMaxAggregateOutputType | null
  }

  type GetRoom_bookingGroupByPayload<T extends room_bookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Room_bookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Room_bookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Room_bookingGroupByOutputType[P]>
            : GetScalarType<T[P], Room_bookingGroupByOutputType[P]>
        }
      >
    >


  export type room_bookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user?: boolean
    room?: boolean
    meeting_title?: boolean
    attendees?: boolean
    start_datetime?: boolean
    end_datetime?: boolean
    need_equipment?: boolean
    notes?: boolean
    users?: boolean | room_booking$usersArgs<ExtArgs>
    rooms?: boolean | room_booking$roomsArgs<ExtArgs>
  }, ExtArgs["result"]["room_booking"]>

  export type room_bookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user?: boolean
    room?: boolean
    meeting_title?: boolean
    attendees?: boolean
    start_datetime?: boolean
    end_datetime?: boolean
    need_equipment?: boolean
    notes?: boolean
    users?: boolean | room_booking$usersArgs<ExtArgs>
    rooms?: boolean | room_booking$roomsArgs<ExtArgs>
  }, ExtArgs["result"]["room_booking"]>

  export type room_bookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user?: boolean
    room?: boolean
    meeting_title?: boolean
    attendees?: boolean
    start_datetime?: boolean
    end_datetime?: boolean
    need_equipment?: boolean
    notes?: boolean
    users?: boolean | room_booking$usersArgs<ExtArgs>
    rooms?: boolean | room_booking$roomsArgs<ExtArgs>
  }, ExtArgs["result"]["room_booking"]>

  export type room_bookingSelectScalar = {
    id?: boolean
    user?: boolean
    room?: boolean
    meeting_title?: boolean
    attendees?: boolean
    start_datetime?: boolean
    end_datetime?: boolean
    need_equipment?: boolean
    notes?: boolean
  }

  export type room_bookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user" | "room" | "meeting_title" | "attendees" | "start_datetime" | "end_datetime" | "need_equipment" | "notes", ExtArgs["result"]["room_booking"]>
  export type room_bookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | room_booking$usersArgs<ExtArgs>
    rooms?: boolean | room_booking$roomsArgs<ExtArgs>
  }
  export type room_bookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | room_booking$usersArgs<ExtArgs>
    rooms?: boolean | room_booking$roomsArgs<ExtArgs>
  }
  export type room_bookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | room_booking$usersArgs<ExtArgs>
    rooms?: boolean | room_booking$roomsArgs<ExtArgs>
  }

  export type $room_bookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "room_booking"
    objects: {
      users: Prisma.$userPayload<ExtArgs> | null
      rooms: Prisma.$roomPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user: number
      room: number
      meeting_title: string
      attendees: number
      start_datetime: Date
      end_datetime: Date
      need_equipment: boolean
      notes: string | null
    }, ExtArgs["result"]["room_booking"]>
    composites: {}
  }

  type room_bookingGetPayload<S extends boolean | null | undefined | room_bookingDefaultArgs> = $Result.GetResult<Prisma.$room_bookingPayload, S>

  type room_bookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<room_bookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Room_bookingCountAggregateInputType | true
    }

  export interface room_bookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['room_booking'], meta: { name: 'room_booking' } }
    /**
     * Find zero or one Room_booking that matches the filter.
     * @param {room_bookingFindUniqueArgs} args - Arguments to find a Room_booking
     * @example
     * // Get one Room_booking
     * const room_booking = await prisma.room_booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends room_bookingFindUniqueArgs>(args: SelectSubset<T, room_bookingFindUniqueArgs<ExtArgs>>): Prisma__room_bookingClient<$Result.GetResult<Prisma.$room_bookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room_booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {room_bookingFindUniqueOrThrowArgs} args - Arguments to find a Room_booking
     * @example
     * // Get one Room_booking
     * const room_booking = await prisma.room_booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends room_bookingFindUniqueOrThrowArgs>(args: SelectSubset<T, room_bookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__room_bookingClient<$Result.GetResult<Prisma.$room_bookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room_booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {room_bookingFindFirstArgs} args - Arguments to find a Room_booking
     * @example
     * // Get one Room_booking
     * const room_booking = await prisma.room_booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends room_bookingFindFirstArgs>(args?: SelectSubset<T, room_bookingFindFirstArgs<ExtArgs>>): Prisma__room_bookingClient<$Result.GetResult<Prisma.$room_bookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room_booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {room_bookingFindFirstOrThrowArgs} args - Arguments to find a Room_booking
     * @example
     * // Get one Room_booking
     * const room_booking = await prisma.room_booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends room_bookingFindFirstOrThrowArgs>(args?: SelectSubset<T, room_bookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__room_bookingClient<$Result.GetResult<Prisma.$room_bookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Room_bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {room_bookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Room_bookings
     * const room_bookings = await prisma.room_booking.findMany()
     * 
     * // Get first 10 Room_bookings
     * const room_bookings = await prisma.room_booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const room_bookingWithIdOnly = await prisma.room_booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends room_bookingFindManyArgs>(args?: SelectSubset<T, room_bookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$room_bookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room_booking.
     * @param {room_bookingCreateArgs} args - Arguments to create a Room_booking.
     * @example
     * // Create one Room_booking
     * const Room_booking = await prisma.room_booking.create({
     *   data: {
     *     // ... data to create a Room_booking
     *   }
     * })
     * 
     */
    create<T extends room_bookingCreateArgs>(args: SelectSubset<T, room_bookingCreateArgs<ExtArgs>>): Prisma__room_bookingClient<$Result.GetResult<Prisma.$room_bookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Room_bookings.
     * @param {room_bookingCreateManyArgs} args - Arguments to create many Room_bookings.
     * @example
     * // Create many Room_bookings
     * const room_booking = await prisma.room_booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends room_bookingCreateManyArgs>(args?: SelectSubset<T, room_bookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Room_bookings and returns the data saved in the database.
     * @param {room_bookingCreateManyAndReturnArgs} args - Arguments to create many Room_bookings.
     * @example
     * // Create many Room_bookings
     * const room_booking = await prisma.room_booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Room_bookings and only return the `id`
     * const room_bookingWithIdOnly = await prisma.room_booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends room_bookingCreateManyAndReturnArgs>(args?: SelectSubset<T, room_bookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$room_bookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Room_booking.
     * @param {room_bookingDeleteArgs} args - Arguments to delete one Room_booking.
     * @example
     * // Delete one Room_booking
     * const Room_booking = await prisma.room_booking.delete({
     *   where: {
     *     // ... filter to delete one Room_booking
     *   }
     * })
     * 
     */
    delete<T extends room_bookingDeleteArgs>(args: SelectSubset<T, room_bookingDeleteArgs<ExtArgs>>): Prisma__room_bookingClient<$Result.GetResult<Prisma.$room_bookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room_booking.
     * @param {room_bookingUpdateArgs} args - Arguments to update one Room_booking.
     * @example
     * // Update one Room_booking
     * const room_booking = await prisma.room_booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends room_bookingUpdateArgs>(args: SelectSubset<T, room_bookingUpdateArgs<ExtArgs>>): Prisma__room_bookingClient<$Result.GetResult<Prisma.$room_bookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Room_bookings.
     * @param {room_bookingDeleteManyArgs} args - Arguments to filter Room_bookings to delete.
     * @example
     * // Delete a few Room_bookings
     * const { count } = await prisma.room_booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends room_bookingDeleteManyArgs>(args?: SelectSubset<T, room_bookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Room_bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {room_bookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Room_bookings
     * const room_booking = await prisma.room_booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends room_bookingUpdateManyArgs>(args: SelectSubset<T, room_bookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Room_bookings and returns the data updated in the database.
     * @param {room_bookingUpdateManyAndReturnArgs} args - Arguments to update many Room_bookings.
     * @example
     * // Update many Room_bookings
     * const room_booking = await prisma.room_booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Room_bookings and only return the `id`
     * const room_bookingWithIdOnly = await prisma.room_booking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends room_bookingUpdateManyAndReturnArgs>(args: SelectSubset<T, room_bookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$room_bookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Room_booking.
     * @param {room_bookingUpsertArgs} args - Arguments to update or create a Room_booking.
     * @example
     * // Update or create a Room_booking
     * const room_booking = await prisma.room_booking.upsert({
     *   create: {
     *     // ... data to create a Room_booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room_booking we want to update
     *   }
     * })
     */
    upsert<T extends room_bookingUpsertArgs>(args: SelectSubset<T, room_bookingUpsertArgs<ExtArgs>>): Prisma__room_bookingClient<$Result.GetResult<Prisma.$room_bookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Room_bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {room_bookingCountArgs} args - Arguments to filter Room_bookings to count.
     * @example
     * // Count the number of Room_bookings
     * const count = await prisma.room_booking.count({
     *   where: {
     *     // ... the filter for the Room_bookings we want to count
     *   }
     * })
    **/
    count<T extends room_bookingCountArgs>(
      args?: Subset<T, room_bookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Room_bookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room_booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Room_bookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Room_bookingAggregateArgs>(args: Subset<T, Room_bookingAggregateArgs>): Prisma.PrismaPromise<GetRoom_bookingAggregateType<T>>

    /**
     * Group by Room_booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {room_bookingGroupByArgs} args - Group by arguments.
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
      T extends room_bookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: room_bookingGroupByArgs['orderBy'] }
        : { orderBy?: room_bookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, room_bookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoom_bookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the room_booking model
   */
  readonly fields: room_bookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for room_booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__room_bookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends room_booking$usersArgs<ExtArgs> = {}>(args?: Subset<T, room_booking$usersArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    rooms<T extends room_booking$roomsArgs<ExtArgs> = {}>(args?: Subset<T, room_booking$roomsArgs<ExtArgs>>): Prisma__roomClient<$Result.GetResult<Prisma.$roomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the room_booking model
   */
  interface room_bookingFieldRefs {
    readonly id: FieldRef<"room_booking", 'String'>
    readonly user: FieldRef<"room_booking", 'Int'>
    readonly room: FieldRef<"room_booking", 'Int'>
    readonly meeting_title: FieldRef<"room_booking", 'String'>
    readonly attendees: FieldRef<"room_booking", 'Int'>
    readonly start_datetime: FieldRef<"room_booking", 'DateTime'>
    readonly end_datetime: FieldRef<"room_booking", 'DateTime'>
    readonly need_equipment: FieldRef<"room_booking", 'Boolean'>
    readonly notes: FieldRef<"room_booking", 'String'>
  }
    

  // Custom InputTypes
  /**
   * room_booking findUnique
   */
  export type room_bookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_booking
     */
    select?: room_bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_booking
     */
    omit?: room_bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_bookingInclude<ExtArgs> | null
    /**
     * Filter, which room_booking to fetch.
     */
    where: room_bookingWhereUniqueInput
  }

  /**
   * room_booking findUniqueOrThrow
   */
  export type room_bookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_booking
     */
    select?: room_bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_booking
     */
    omit?: room_bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_bookingInclude<ExtArgs> | null
    /**
     * Filter, which room_booking to fetch.
     */
    where: room_bookingWhereUniqueInput
  }

  /**
   * room_booking findFirst
   */
  export type room_bookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_booking
     */
    select?: room_bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_booking
     */
    omit?: room_bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_bookingInclude<ExtArgs> | null
    /**
     * Filter, which room_booking to fetch.
     */
    where?: room_bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of room_bookings to fetch.
     */
    orderBy?: room_bookingOrderByWithRelationInput | room_bookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for room_bookings.
     */
    cursor?: room_bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` room_bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` room_bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of room_bookings.
     */
    distinct?: Room_bookingScalarFieldEnum | Room_bookingScalarFieldEnum[]
  }

  /**
   * room_booking findFirstOrThrow
   */
  export type room_bookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_booking
     */
    select?: room_bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_booking
     */
    omit?: room_bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_bookingInclude<ExtArgs> | null
    /**
     * Filter, which room_booking to fetch.
     */
    where?: room_bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of room_bookings to fetch.
     */
    orderBy?: room_bookingOrderByWithRelationInput | room_bookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for room_bookings.
     */
    cursor?: room_bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` room_bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` room_bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of room_bookings.
     */
    distinct?: Room_bookingScalarFieldEnum | Room_bookingScalarFieldEnum[]
  }

  /**
   * room_booking findMany
   */
  export type room_bookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_booking
     */
    select?: room_bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_booking
     */
    omit?: room_bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_bookingInclude<ExtArgs> | null
    /**
     * Filter, which room_bookings to fetch.
     */
    where?: room_bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of room_bookings to fetch.
     */
    orderBy?: room_bookingOrderByWithRelationInput | room_bookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing room_bookings.
     */
    cursor?: room_bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` room_bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` room_bookings.
     */
    skip?: number
    distinct?: Room_bookingScalarFieldEnum | Room_bookingScalarFieldEnum[]
  }

  /**
   * room_booking create
   */
  export type room_bookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_booking
     */
    select?: room_bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_booking
     */
    omit?: room_bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_bookingInclude<ExtArgs> | null
    /**
     * The data needed to create a room_booking.
     */
    data: XOR<room_bookingCreateInput, room_bookingUncheckedCreateInput>
  }

  /**
   * room_booking createMany
   */
  export type room_bookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many room_bookings.
     */
    data: room_bookingCreateManyInput | room_bookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * room_booking createManyAndReturn
   */
  export type room_bookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_booking
     */
    select?: room_bookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the room_booking
     */
    omit?: room_bookingOmit<ExtArgs> | null
    /**
     * The data used to create many room_bookings.
     */
    data: room_bookingCreateManyInput | room_bookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_bookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * room_booking update
   */
  export type room_bookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_booking
     */
    select?: room_bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_booking
     */
    omit?: room_bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_bookingInclude<ExtArgs> | null
    /**
     * The data needed to update a room_booking.
     */
    data: XOR<room_bookingUpdateInput, room_bookingUncheckedUpdateInput>
    /**
     * Choose, which room_booking to update.
     */
    where: room_bookingWhereUniqueInput
  }

  /**
   * room_booking updateMany
   */
  export type room_bookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update room_bookings.
     */
    data: XOR<room_bookingUpdateManyMutationInput, room_bookingUncheckedUpdateManyInput>
    /**
     * Filter which room_bookings to update
     */
    where?: room_bookingWhereInput
    /**
     * Limit how many room_bookings to update.
     */
    limit?: number
  }

  /**
   * room_booking updateManyAndReturn
   */
  export type room_bookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_booking
     */
    select?: room_bookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the room_booking
     */
    omit?: room_bookingOmit<ExtArgs> | null
    /**
     * The data used to update room_bookings.
     */
    data: XOR<room_bookingUpdateManyMutationInput, room_bookingUncheckedUpdateManyInput>
    /**
     * Filter which room_bookings to update
     */
    where?: room_bookingWhereInput
    /**
     * Limit how many room_bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_bookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * room_booking upsert
   */
  export type room_bookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_booking
     */
    select?: room_bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_booking
     */
    omit?: room_bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_bookingInclude<ExtArgs> | null
    /**
     * The filter to search for the room_booking to update in case it exists.
     */
    where: room_bookingWhereUniqueInput
    /**
     * In case the room_booking found by the `where` argument doesn't exist, create a new room_booking with this data.
     */
    create: XOR<room_bookingCreateInput, room_bookingUncheckedCreateInput>
    /**
     * In case the room_booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<room_bookingUpdateInput, room_bookingUncheckedUpdateInput>
  }

  /**
   * room_booking delete
   */
  export type room_bookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_booking
     */
    select?: room_bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_booking
     */
    omit?: room_bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_bookingInclude<ExtArgs> | null
    /**
     * Filter which room_booking to delete.
     */
    where: room_bookingWhereUniqueInput
  }

  /**
   * room_booking deleteMany
   */
  export type room_bookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which room_bookings to delete
     */
    where?: room_bookingWhereInput
    /**
     * Limit how many room_bookings to delete.
     */
    limit?: number
  }

  /**
   * room_booking.users
   */
  export type room_booking$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * room_booking.rooms
   */
  export type room_booking$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room
     */
    select?: roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room
     */
    omit?: roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomInclude<ExtArgs> | null
    where?: roomWhereInput
  }

  /**
   * room_booking without action
   */
  export type room_bookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_booking
     */
    select?: room_bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_booking
     */
    omit?: room_bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_bookingInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    group: number | null
    position: number | null
    position_level: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    group: number | null
    position: number | null
    position_level: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    email: string | null
    prefix: string | null
    thai_f_name: string | null
    thai_l_name: string | null
    eng_f_name: string | null
    eng_l_name: string | null
    phone: string | null
    line_id: string | null
    role: string | null
    status: boolean | null
    group: number | null
    position: number | null
    position_level: number | null
    avatar_id: string | null
    create_at: Date | null
    hashedRefreshToken: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    email: string | null
    prefix: string | null
    thai_f_name: string | null
    thai_l_name: string | null
    eng_f_name: string | null
    eng_l_name: string | null
    phone: string | null
    line_id: string | null
    role: string | null
    status: boolean | null
    group: number | null
    position: number | null
    position_level: number | null
    avatar_id: string | null
    create_at: Date | null
    hashedRefreshToken: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    email: number
    prefix: number
    thai_f_name: number
    thai_l_name: number
    eng_f_name: number
    eng_l_name: number
    phone: number
    line_id: number
    role: number
    status: number
    group: number
    position: number
    position_level: number
    avatar_id: number
    create_at: number
    hashedRefreshToken: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    group?: true
    position?: true
    position_level?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    group?: true
    position?: true
    position_level?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    prefix?: true
    thai_f_name?: true
    thai_l_name?: true
    eng_f_name?: true
    eng_l_name?: true
    phone?: true
    line_id?: true
    role?: true
    status?: true
    group?: true
    position?: true
    position_level?: true
    avatar_id?: true
    create_at?: true
    hashedRefreshToken?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    prefix?: true
    thai_f_name?: true
    thai_l_name?: true
    eng_f_name?: true
    eng_l_name?: true
    phone?: true
    line_id?: true
    role?: true
    status?: true
    group?: true
    position?: true
    position_level?: true
    avatar_id?: true
    create_at?: true
    hashedRefreshToken?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    prefix?: true
    thai_f_name?: true
    thai_l_name?: true
    eng_f_name?: true
    eng_l_name?: true
    phone?: true
    line_id?: true
    role?: true
    status?: true
    group?: true
    position?: true
    position_level?: true
    avatar_id?: true
    create_at?: true
    hashedRefreshToken?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    email: string
    prefix: string
    thai_f_name: string
    thai_l_name: string
    eng_f_name: string
    eng_l_name: string
    phone: string
    line_id: string
    role: string
    status: boolean
    group: number
    position: number
    position_level: number
    avatar_id: string
    create_at: Date
    hashedRefreshToken: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    prefix?: boolean
    thai_f_name?: boolean
    thai_l_name?: boolean
    eng_f_name?: boolean
    eng_l_name?: boolean
    phone?: boolean
    line_id?: boolean
    role?: boolean
    status?: boolean
    group?: boolean
    position?: boolean
    position_level?: boolean
    avatar_id?: boolean
    create_at?: boolean
    hashedRefreshToken?: boolean
    groups?: boolean | user$groupsArgs<ExtArgs>
    positions?: boolean | user$positionsArgs<ExtArgs>
    position_levels?: boolean | user$position_levelsArgs<ExtArgs>
    bookings?: boolean | user$bookingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    prefix?: boolean
    thai_f_name?: boolean
    thai_l_name?: boolean
    eng_f_name?: boolean
    eng_l_name?: boolean
    phone?: boolean
    line_id?: boolean
    role?: boolean
    status?: boolean
    group?: boolean
    position?: boolean
    position_level?: boolean
    avatar_id?: boolean
    create_at?: boolean
    hashedRefreshToken?: boolean
    groups?: boolean | user$groupsArgs<ExtArgs>
    positions?: boolean | user$positionsArgs<ExtArgs>
    position_levels?: boolean | user$position_levelsArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    prefix?: boolean
    thai_f_name?: boolean
    thai_l_name?: boolean
    eng_f_name?: boolean
    eng_l_name?: boolean
    phone?: boolean
    line_id?: boolean
    role?: boolean
    status?: boolean
    group?: boolean
    position?: boolean
    position_level?: boolean
    avatar_id?: boolean
    create_at?: boolean
    hashedRefreshToken?: boolean
    groups?: boolean | user$groupsArgs<ExtArgs>
    positions?: boolean | user$positionsArgs<ExtArgs>
    position_levels?: boolean | user$position_levelsArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    prefix?: boolean
    thai_f_name?: boolean
    thai_l_name?: boolean
    eng_f_name?: boolean
    eng_l_name?: boolean
    phone?: boolean
    line_id?: boolean
    role?: boolean
    status?: boolean
    group?: boolean
    position?: boolean
    position_level?: boolean
    avatar_id?: boolean
    create_at?: boolean
    hashedRefreshToken?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "email" | "prefix" | "thai_f_name" | "thai_l_name" | "eng_f_name" | "eng_l_name" | "phone" | "line_id" | "role" | "status" | "group" | "position" | "position_level" | "avatar_id" | "create_at" | "hashedRefreshToken", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | user$groupsArgs<ExtArgs>
    positions?: boolean | user$positionsArgs<ExtArgs>
    position_levels?: boolean | user$position_levelsArgs<ExtArgs>
    bookings?: boolean | user$bookingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | user$groupsArgs<ExtArgs>
    positions?: boolean | user$positionsArgs<ExtArgs>
    position_levels?: boolean | user$position_levelsArgs<ExtArgs>
  }
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | user$groupsArgs<ExtArgs>
    positions?: boolean | user$positionsArgs<ExtArgs>
    position_levels?: boolean | user$position_levelsArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      groups: Prisma.$groupPayload<ExtArgs> | null
      positions: Prisma.$positionPayload<ExtArgs> | null
      position_levels: Prisma.$position_levelPayload<ExtArgs> | null
      bookings: Prisma.$room_bookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      email: string
      prefix: string
      thai_f_name: string
      thai_l_name: string
      eng_f_name: string
      eng_l_name: string
      phone: string
      line_id: string
      role: string
      status: boolean
      group: number
      position: number
      position_level: number
      avatar_id: string
      create_at: Date
      hashedRefreshToken: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    groups<T extends user$groupsArgs<ExtArgs> = {}>(args?: Subset<T, user$groupsArgs<ExtArgs>>): Prisma__groupClient<$Result.GetResult<Prisma.$groupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    positions<T extends user$positionsArgs<ExtArgs> = {}>(args?: Subset<T, user$positionsArgs<ExtArgs>>): Prisma__positionClient<$Result.GetResult<Prisma.$positionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    position_levels<T extends user$position_levelsArgs<ExtArgs> = {}>(args?: Subset<T, user$position_levelsArgs<ExtArgs>>): Prisma__position_levelClient<$Result.GetResult<Prisma.$position_levelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    bookings<T extends user$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, user$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$room_bookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly username: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly prefix: FieldRef<"user", 'String'>
    readonly thai_f_name: FieldRef<"user", 'String'>
    readonly thai_l_name: FieldRef<"user", 'String'>
    readonly eng_f_name: FieldRef<"user", 'String'>
    readonly eng_l_name: FieldRef<"user", 'String'>
    readonly phone: FieldRef<"user", 'String'>
    readonly line_id: FieldRef<"user", 'String'>
    readonly role: FieldRef<"user", 'String'>
    readonly status: FieldRef<"user", 'Boolean'>
    readonly group: FieldRef<"user", 'Int'>
    readonly position: FieldRef<"user", 'Int'>
    readonly position_level: FieldRef<"user", 'Int'>
    readonly avatar_id: FieldRef<"user", 'String'>
    readonly create_at: FieldRef<"user", 'DateTime'>
    readonly hashedRefreshToken: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.groups
   */
  export type user$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group
     */
    select?: groupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group
     */
    omit?: groupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupInclude<ExtArgs> | null
    where?: groupWhereInput
  }

  /**
   * user.positions
   */
  export type user$positionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the position
     */
    select?: positionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the position
     */
    omit?: positionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: positionInclude<ExtArgs> | null
    where?: positionWhereInput
  }

  /**
   * user.position_levels
   */
  export type user$position_levelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the position_level
     */
    select?: position_levelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the position_level
     */
    omit?: position_levelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: position_levelInclude<ExtArgs> | null
    where?: position_levelWhereInput
  }

  /**
   * user.bookings
   */
  export type user$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_booking
     */
    select?: room_bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_booking
     */
    omit?: room_bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_bookingInclude<ExtArgs> | null
    where?: room_bookingWhereInput
    orderBy?: room_bookingOrderByWithRelationInput | room_bookingOrderByWithRelationInput[]
    cursor?: room_bookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Room_bookingScalarFieldEnum | Room_bookingScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
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


  export const GroupScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const PositionScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type PositionScalarFieldEnum = (typeof PositionScalarFieldEnum)[keyof typeof PositionScalarFieldEnum]


  export const Position_levelScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type Position_levelScalarFieldEnum = (typeof Position_levelScalarFieldEnum)[keyof typeof Position_levelScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image_url: 'image_url',
    capacity: 'capacity',
    has_equipment: 'has_equipment'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const Room_bookingScalarFieldEnum: {
    id: 'id',
    user: 'user',
    room: 'room',
    meeting_title: 'meeting_title',
    attendees: 'attendees',
    start_datetime: 'start_datetime',
    end_datetime: 'end_datetime',
    need_equipment: 'need_equipment',
    notes: 'notes'
  };

  export type Room_bookingScalarFieldEnum = (typeof Room_bookingScalarFieldEnum)[keyof typeof Room_bookingScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    email: 'email',
    prefix: 'prefix',
    thai_f_name: 'thai_f_name',
    thai_l_name: 'thai_l_name',
    eng_f_name: 'eng_f_name',
    eng_l_name: 'eng_l_name',
    phone: 'phone',
    line_id: 'line_id',
    role: 'role',
    status: 'status',
    group: 'group',
    position: 'position',
    position_level: 'position_level',
    avatar_id: 'avatar_id',
    create_at: 'create_at',
    hashedRefreshToken: 'hashedRefreshToken'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type groupWhereInput = {
    AND?: groupWhereInput | groupWhereInput[]
    OR?: groupWhereInput[]
    NOT?: groupWhereInput | groupWhereInput[]
    id?: IntFilter<"group"> | number
    name?: StringFilter<"group"> | string
    users?: UserListRelationFilter
  }

  export type groupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: userOrderByRelationAggregateInput
  }

  export type groupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: groupWhereInput | groupWhereInput[]
    OR?: groupWhereInput[]
    NOT?: groupWhereInput | groupWhereInput[]
    name?: StringFilter<"group"> | string
    users?: UserListRelationFilter
  }, "id">

  export type groupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: groupCountOrderByAggregateInput
    _avg?: groupAvgOrderByAggregateInput
    _max?: groupMaxOrderByAggregateInput
    _min?: groupMinOrderByAggregateInput
    _sum?: groupSumOrderByAggregateInput
  }

  export type groupScalarWhereWithAggregatesInput = {
    AND?: groupScalarWhereWithAggregatesInput | groupScalarWhereWithAggregatesInput[]
    OR?: groupScalarWhereWithAggregatesInput[]
    NOT?: groupScalarWhereWithAggregatesInput | groupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"group"> | number
    name?: StringWithAggregatesFilter<"group"> | string
  }

  export type positionWhereInput = {
    AND?: positionWhereInput | positionWhereInput[]
    OR?: positionWhereInput[]
    NOT?: positionWhereInput | positionWhereInput[]
    id?: IntFilter<"position"> | number
    name?: StringFilter<"position"> | string
    users?: UserListRelationFilter
  }

  export type positionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: userOrderByRelationAggregateInput
  }

  export type positionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: positionWhereInput | positionWhereInput[]
    OR?: positionWhereInput[]
    NOT?: positionWhereInput | positionWhereInput[]
    name?: StringFilter<"position"> | string
    users?: UserListRelationFilter
  }, "id">

  export type positionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: positionCountOrderByAggregateInput
    _avg?: positionAvgOrderByAggregateInput
    _max?: positionMaxOrderByAggregateInput
    _min?: positionMinOrderByAggregateInput
    _sum?: positionSumOrderByAggregateInput
  }

  export type positionScalarWhereWithAggregatesInput = {
    AND?: positionScalarWhereWithAggregatesInput | positionScalarWhereWithAggregatesInput[]
    OR?: positionScalarWhereWithAggregatesInput[]
    NOT?: positionScalarWhereWithAggregatesInput | positionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"position"> | number
    name?: StringWithAggregatesFilter<"position"> | string
  }

  export type position_levelWhereInput = {
    AND?: position_levelWhereInput | position_levelWhereInput[]
    OR?: position_levelWhereInput[]
    NOT?: position_levelWhereInput | position_levelWhereInput[]
    id?: IntFilter<"position_level"> | number
    name?: StringFilter<"position_level"> | string
    users?: UserListRelationFilter
  }

  export type position_levelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: userOrderByRelationAggregateInput
  }

  export type position_levelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: position_levelWhereInput | position_levelWhereInput[]
    OR?: position_levelWhereInput[]
    NOT?: position_levelWhereInput | position_levelWhereInput[]
    name?: StringFilter<"position_level"> | string
    users?: UserListRelationFilter
  }, "id">

  export type position_levelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: position_levelCountOrderByAggregateInput
    _avg?: position_levelAvgOrderByAggregateInput
    _max?: position_levelMaxOrderByAggregateInput
    _min?: position_levelMinOrderByAggregateInput
    _sum?: position_levelSumOrderByAggregateInput
  }

  export type position_levelScalarWhereWithAggregatesInput = {
    AND?: position_levelScalarWhereWithAggregatesInput | position_levelScalarWhereWithAggregatesInput[]
    OR?: position_levelScalarWhereWithAggregatesInput[]
    NOT?: position_levelScalarWhereWithAggregatesInput | position_levelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"position_level"> | number
    name?: StringWithAggregatesFilter<"position_level"> | string
  }

  export type roomWhereInput = {
    AND?: roomWhereInput | roomWhereInput[]
    OR?: roomWhereInput[]
    NOT?: roomWhereInput | roomWhereInput[]
    id?: IntFilter<"room"> | number
    name?: StringFilter<"room"> | string
    image_url?: StringFilter<"room"> | string
    capacity?: IntFilter<"room"> | number
    has_equipment?: BoolFilter<"room"> | boolean
    bookings?: Room_bookingListRelationFilter
  }

  export type roomOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image_url?: SortOrder
    capacity?: SortOrder
    has_equipment?: SortOrder
    bookings?: room_bookingOrderByRelationAggregateInput
  }

  export type roomWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: roomWhereInput | roomWhereInput[]
    OR?: roomWhereInput[]
    NOT?: roomWhereInput | roomWhereInput[]
    name?: StringFilter<"room"> | string
    image_url?: StringFilter<"room"> | string
    capacity?: IntFilter<"room"> | number
    has_equipment?: BoolFilter<"room"> | boolean
    bookings?: Room_bookingListRelationFilter
  }, "id">

  export type roomOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image_url?: SortOrder
    capacity?: SortOrder
    has_equipment?: SortOrder
    _count?: roomCountOrderByAggregateInput
    _avg?: roomAvgOrderByAggregateInput
    _max?: roomMaxOrderByAggregateInput
    _min?: roomMinOrderByAggregateInput
    _sum?: roomSumOrderByAggregateInput
  }

  export type roomScalarWhereWithAggregatesInput = {
    AND?: roomScalarWhereWithAggregatesInput | roomScalarWhereWithAggregatesInput[]
    OR?: roomScalarWhereWithAggregatesInput[]
    NOT?: roomScalarWhereWithAggregatesInput | roomScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"room"> | number
    name?: StringWithAggregatesFilter<"room"> | string
    image_url?: StringWithAggregatesFilter<"room"> | string
    capacity?: IntWithAggregatesFilter<"room"> | number
    has_equipment?: BoolWithAggregatesFilter<"room"> | boolean
  }

  export type room_bookingWhereInput = {
    AND?: room_bookingWhereInput | room_bookingWhereInput[]
    OR?: room_bookingWhereInput[]
    NOT?: room_bookingWhereInput | room_bookingWhereInput[]
    id?: UuidFilter<"room_booking"> | string
    user?: IntFilter<"room_booking"> | number
    room?: IntFilter<"room_booking"> | number
    meeting_title?: StringFilter<"room_booking"> | string
    attendees?: IntFilter<"room_booking"> | number
    start_datetime?: DateTimeFilter<"room_booking"> | Date | string
    end_datetime?: DateTimeFilter<"room_booking"> | Date | string
    need_equipment?: BoolFilter<"room_booking"> | boolean
    notes?: StringNullableFilter<"room_booking"> | string | null
    users?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    rooms?: XOR<RoomNullableScalarRelationFilter, roomWhereInput> | null
  }

  export type room_bookingOrderByWithRelationInput = {
    id?: SortOrder
    user?: SortOrder
    room?: SortOrder
    meeting_title?: SortOrder
    attendees?: SortOrder
    start_datetime?: SortOrder
    end_datetime?: SortOrder
    need_equipment?: SortOrder
    notes?: SortOrderInput | SortOrder
    users?: userOrderByWithRelationInput
    rooms?: roomOrderByWithRelationInput
  }

  export type room_bookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: room_bookingWhereInput | room_bookingWhereInput[]
    OR?: room_bookingWhereInput[]
    NOT?: room_bookingWhereInput | room_bookingWhereInput[]
    user?: IntFilter<"room_booking"> | number
    room?: IntFilter<"room_booking"> | number
    meeting_title?: StringFilter<"room_booking"> | string
    attendees?: IntFilter<"room_booking"> | number
    start_datetime?: DateTimeFilter<"room_booking"> | Date | string
    end_datetime?: DateTimeFilter<"room_booking"> | Date | string
    need_equipment?: BoolFilter<"room_booking"> | boolean
    notes?: StringNullableFilter<"room_booking"> | string | null
    users?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    rooms?: XOR<RoomNullableScalarRelationFilter, roomWhereInput> | null
  }, "id">

  export type room_bookingOrderByWithAggregationInput = {
    id?: SortOrder
    user?: SortOrder
    room?: SortOrder
    meeting_title?: SortOrder
    attendees?: SortOrder
    start_datetime?: SortOrder
    end_datetime?: SortOrder
    need_equipment?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: room_bookingCountOrderByAggregateInput
    _avg?: room_bookingAvgOrderByAggregateInput
    _max?: room_bookingMaxOrderByAggregateInput
    _min?: room_bookingMinOrderByAggregateInput
    _sum?: room_bookingSumOrderByAggregateInput
  }

  export type room_bookingScalarWhereWithAggregatesInput = {
    AND?: room_bookingScalarWhereWithAggregatesInput | room_bookingScalarWhereWithAggregatesInput[]
    OR?: room_bookingScalarWhereWithAggregatesInput[]
    NOT?: room_bookingScalarWhereWithAggregatesInput | room_bookingScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"room_booking"> | string
    user?: IntWithAggregatesFilter<"room_booking"> | number
    room?: IntWithAggregatesFilter<"room_booking"> | number
    meeting_title?: StringWithAggregatesFilter<"room_booking"> | string
    attendees?: IntWithAggregatesFilter<"room_booking"> | number
    start_datetime?: DateTimeWithAggregatesFilter<"room_booking"> | Date | string
    end_datetime?: DateTimeWithAggregatesFilter<"room_booking"> | Date | string
    need_equipment?: BoolWithAggregatesFilter<"room_booking"> | boolean
    notes?: StringNullableWithAggregatesFilter<"room_booking"> | string | null
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    username?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    prefix?: StringFilter<"user"> | string
    thai_f_name?: StringFilter<"user"> | string
    thai_l_name?: StringFilter<"user"> | string
    eng_f_name?: StringFilter<"user"> | string
    eng_l_name?: StringFilter<"user"> | string
    phone?: StringFilter<"user"> | string
    line_id?: StringFilter<"user"> | string
    role?: StringFilter<"user"> | string
    status?: BoolFilter<"user"> | boolean
    group?: IntFilter<"user"> | number
    position?: IntFilter<"user"> | number
    position_level?: IntFilter<"user"> | number
    avatar_id?: StringFilter<"user"> | string
    create_at?: DateTimeFilter<"user"> | Date | string
    hashedRefreshToken?: StringNullableFilter<"user"> | string | null
    groups?: XOR<GroupNullableScalarRelationFilter, groupWhereInput> | null
    positions?: XOR<PositionNullableScalarRelationFilter, positionWhereInput> | null
    position_levels?: XOR<Position_levelNullableScalarRelationFilter, position_levelWhereInput> | null
    bookings?: Room_bookingListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    prefix?: SortOrder
    thai_f_name?: SortOrder
    thai_l_name?: SortOrder
    eng_f_name?: SortOrder
    eng_l_name?: SortOrder
    phone?: SortOrder
    line_id?: SortOrder
    role?: SortOrder
    status?: SortOrder
    group?: SortOrder
    position?: SortOrder
    position_level?: SortOrder
    avatar_id?: SortOrder
    create_at?: SortOrder
    hashedRefreshToken?: SortOrderInput | SortOrder
    groups?: groupOrderByWithRelationInput
    positions?: positionOrderByWithRelationInput
    position_levels?: position_levelOrderByWithRelationInput
    bookings?: room_bookingOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    password?: StringFilter<"user"> | string
    prefix?: StringFilter<"user"> | string
    thai_f_name?: StringFilter<"user"> | string
    thai_l_name?: StringFilter<"user"> | string
    eng_f_name?: StringFilter<"user"> | string
    eng_l_name?: StringFilter<"user"> | string
    phone?: StringFilter<"user"> | string
    line_id?: StringFilter<"user"> | string
    role?: StringFilter<"user"> | string
    status?: BoolFilter<"user"> | boolean
    group?: IntFilter<"user"> | number
    position?: IntFilter<"user"> | number
    position_level?: IntFilter<"user"> | number
    avatar_id?: StringFilter<"user"> | string
    create_at?: DateTimeFilter<"user"> | Date | string
    hashedRefreshToken?: StringNullableFilter<"user"> | string | null
    groups?: XOR<GroupNullableScalarRelationFilter, groupWhereInput> | null
    positions?: XOR<PositionNullableScalarRelationFilter, positionWhereInput> | null
    position_levels?: XOR<Position_levelNullableScalarRelationFilter, position_levelWhereInput> | null
    bookings?: Room_bookingListRelationFilter
  }, "id" | "username" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    prefix?: SortOrder
    thai_f_name?: SortOrder
    thai_l_name?: SortOrder
    eng_f_name?: SortOrder
    eng_l_name?: SortOrder
    phone?: SortOrder
    line_id?: SortOrder
    role?: SortOrder
    status?: SortOrder
    group?: SortOrder
    position?: SortOrder
    position_level?: SortOrder
    avatar_id?: SortOrder
    create_at?: SortOrder
    hashedRefreshToken?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    username?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    prefix?: StringWithAggregatesFilter<"user"> | string
    thai_f_name?: StringWithAggregatesFilter<"user"> | string
    thai_l_name?: StringWithAggregatesFilter<"user"> | string
    eng_f_name?: StringWithAggregatesFilter<"user"> | string
    eng_l_name?: StringWithAggregatesFilter<"user"> | string
    phone?: StringWithAggregatesFilter<"user"> | string
    line_id?: StringWithAggregatesFilter<"user"> | string
    role?: StringWithAggregatesFilter<"user"> | string
    status?: BoolWithAggregatesFilter<"user"> | boolean
    group?: IntWithAggregatesFilter<"user"> | number
    position?: IntWithAggregatesFilter<"user"> | number
    position_level?: IntWithAggregatesFilter<"user"> | number
    avatar_id?: StringWithAggregatesFilter<"user"> | string
    create_at?: DateTimeWithAggregatesFilter<"user"> | Date | string
    hashedRefreshToken?: StringNullableWithAggregatesFilter<"user"> | string | null
  }

  export type groupCreateInput = {
    name: string
    users?: userCreateNestedManyWithoutGroupsInput
  }

  export type groupUncheckedCreateInput = {
    id?: number
    name: string
    users?: userUncheckedCreateNestedManyWithoutGroupsInput
  }

  export type groupUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: userUpdateManyWithoutGroupsNestedInput
  }

  export type groupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: userUncheckedUpdateManyWithoutGroupsNestedInput
  }

  export type groupCreateManyInput = {
    id?: number
    name: string
  }

  export type groupUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type groupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type positionCreateInput = {
    name: string
    users?: userCreateNestedManyWithoutPositionsInput
  }

  export type positionUncheckedCreateInput = {
    id?: number
    name: string
    users?: userUncheckedCreateNestedManyWithoutPositionsInput
  }

  export type positionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: userUpdateManyWithoutPositionsNestedInput
  }

  export type positionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: userUncheckedUpdateManyWithoutPositionsNestedInput
  }

  export type positionCreateManyInput = {
    id?: number
    name: string
  }

  export type positionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type positionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type position_levelCreateInput = {
    name: string
    users?: userCreateNestedManyWithoutPosition_levelsInput
  }

  export type position_levelUncheckedCreateInput = {
    id?: number
    name: string
    users?: userUncheckedCreateNestedManyWithoutPosition_levelsInput
  }

  export type position_levelUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: userUpdateManyWithoutPosition_levelsNestedInput
  }

  export type position_levelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: userUncheckedUpdateManyWithoutPosition_levelsNestedInput
  }

  export type position_levelCreateManyInput = {
    id?: number
    name: string
  }

  export type position_levelUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type position_levelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type roomCreateInput = {
    name: string
    image_url: string
    capacity: number
    has_equipment: boolean
    bookings?: room_bookingCreateNestedManyWithoutRoomsInput
  }

  export type roomUncheckedCreateInput = {
    id?: number
    name: string
    image_url: string
    capacity: number
    has_equipment: boolean
    bookings?: room_bookingUncheckedCreateNestedManyWithoutRoomsInput
  }

  export type roomUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    has_equipment?: BoolFieldUpdateOperationsInput | boolean
    bookings?: room_bookingUpdateManyWithoutRoomsNestedInput
  }

  export type roomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    has_equipment?: BoolFieldUpdateOperationsInput | boolean
    bookings?: room_bookingUncheckedUpdateManyWithoutRoomsNestedInput
  }

  export type roomCreateManyInput = {
    id?: number
    name: string
    image_url: string
    capacity: number
    has_equipment: boolean
  }

  export type roomUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    has_equipment?: BoolFieldUpdateOperationsInput | boolean
  }

  export type roomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    has_equipment?: BoolFieldUpdateOperationsInput | boolean
  }

  export type room_bookingCreateInput = {
    id?: string
    meeting_title: string
    attendees: number
    start_datetime: Date | string
    end_datetime: Date | string
    need_equipment: boolean
    notes?: string | null
    users?: userCreateNestedOneWithoutBookingsInput
    rooms?: roomCreateNestedOneWithoutBookingsInput
  }

  export type room_bookingUncheckedCreateInput = {
    id?: string
    user: number
    room: number
    meeting_title: string
    attendees: number
    start_datetime: Date | string
    end_datetime: Date | string
    need_equipment: boolean
    notes?: string | null
  }

  export type room_bookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    meeting_title?: StringFieldUpdateOperationsInput | string
    attendees?: IntFieldUpdateOperationsInput | number
    start_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    end_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    need_equipment?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    users?: userUpdateOneWithoutBookingsNestedInput
    rooms?: roomUpdateOneWithoutBookingsNestedInput
  }

  export type room_bookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: IntFieldUpdateOperationsInput | number
    room?: IntFieldUpdateOperationsInput | number
    meeting_title?: StringFieldUpdateOperationsInput | string
    attendees?: IntFieldUpdateOperationsInput | number
    start_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    end_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    need_equipment?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type room_bookingCreateManyInput = {
    id?: string
    user: number
    room: number
    meeting_title: string
    attendees: number
    start_datetime: Date | string
    end_datetime: Date | string
    need_equipment: boolean
    notes?: string | null
  }

  export type room_bookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    meeting_title?: StringFieldUpdateOperationsInput | string
    attendees?: IntFieldUpdateOperationsInput | number
    start_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    end_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    need_equipment?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type room_bookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: IntFieldUpdateOperationsInput | number
    room?: IntFieldUpdateOperationsInput | number
    meeting_title?: StringFieldUpdateOperationsInput | string
    attendees?: IntFieldUpdateOperationsInput | number
    start_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    end_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    need_equipment?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userCreateInput = {
    username: string
    password: string
    email: string
    prefix: string
    thai_f_name: string
    thai_l_name: string
    eng_f_name: string
    eng_l_name: string
    phone: string
    line_id: string
    role?: string
    status?: boolean
    avatar_id: string
    create_at?: Date | string
    hashedRefreshToken?: string | null
    groups?: groupCreateNestedOneWithoutUsersInput
    positions?: positionCreateNestedOneWithoutUsersInput
    position_levels?: position_levelCreateNestedOneWithoutUsersInput
    bookings?: room_bookingCreateNestedManyWithoutUsersInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    email: string
    prefix: string
    thai_f_name: string
    thai_l_name: string
    eng_f_name: string
    eng_l_name: string
    phone: string
    line_id: string
    role?: string
    status?: boolean
    group: number
    position: number
    position_level: number
    avatar_id: string
    create_at?: Date | string
    hashedRefreshToken?: string | null
    bookings?: room_bookingUncheckedCreateNestedManyWithoutUsersInput
  }

  export type userUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    thai_f_name?: StringFieldUpdateOperationsInput | string
    thai_l_name?: StringFieldUpdateOperationsInput | string
    eng_f_name?: StringFieldUpdateOperationsInput | string
    eng_l_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    line_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    avatar_id?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    groups?: groupUpdateOneWithoutUsersNestedInput
    positions?: positionUpdateOneWithoutUsersNestedInput
    position_levels?: position_levelUpdateOneWithoutUsersNestedInput
    bookings?: room_bookingUpdateManyWithoutUsersNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    thai_f_name?: StringFieldUpdateOperationsInput | string
    thai_l_name?: StringFieldUpdateOperationsInput | string
    eng_f_name?: StringFieldUpdateOperationsInput | string
    eng_l_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    line_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    group?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    position_level?: IntFieldUpdateOperationsInput | number
    avatar_id?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: room_bookingUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    username: string
    password: string
    email: string
    prefix: string
    thai_f_name: string
    thai_l_name: string
    eng_f_name: string
    eng_l_name: string
    phone: string
    line_id: string
    role?: string
    status?: boolean
    group: number
    position: number
    position_level: number
    avatar_id: string
    create_at?: Date | string
    hashedRefreshToken?: string | null
  }

  export type userUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    thai_f_name?: StringFieldUpdateOperationsInput | string
    thai_l_name?: StringFieldUpdateOperationsInput | string
    eng_f_name?: StringFieldUpdateOperationsInput | string
    eng_l_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    line_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    avatar_id?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    thai_f_name?: StringFieldUpdateOperationsInput | string
    thai_l_name?: StringFieldUpdateOperationsInput | string
    eng_f_name?: StringFieldUpdateOperationsInput | string
    eng_l_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    line_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    group?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    position_level?: IntFieldUpdateOperationsInput | number
    avatar_id?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserListRelationFilter = {
    every?: userWhereInput
    some?: userWhereInput
    none?: userWhereInput
  }

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type groupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type groupAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type groupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type groupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type groupSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type positionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type positionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type positionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type positionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type positionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type position_levelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type position_levelAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type position_levelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type position_levelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type position_levelSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Room_bookingListRelationFilter = {
    every?: room_bookingWhereInput
    some?: room_bookingWhereInput
    none?: room_bookingWhereInput
  }

  export type room_bookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type roomCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image_url?: SortOrder
    capacity?: SortOrder
    has_equipment?: SortOrder
  }

  export type roomAvgOrderByAggregateInput = {
    id?: SortOrder
    capacity?: SortOrder
  }

  export type roomMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image_url?: SortOrder
    capacity?: SortOrder
    has_equipment?: SortOrder
  }

  export type roomMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image_url?: SortOrder
    capacity?: SortOrder
    has_equipment?: SortOrder
  }

  export type roomSumOrderByAggregateInput = {
    id?: SortOrder
    capacity?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: userWhereInput | null
    isNot?: userWhereInput | null
  }

  export type RoomNullableScalarRelationFilter = {
    is?: roomWhereInput | null
    isNot?: roomWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type room_bookingCountOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    room?: SortOrder
    meeting_title?: SortOrder
    attendees?: SortOrder
    start_datetime?: SortOrder
    end_datetime?: SortOrder
    need_equipment?: SortOrder
    notes?: SortOrder
  }

  export type room_bookingAvgOrderByAggregateInput = {
    user?: SortOrder
    room?: SortOrder
    attendees?: SortOrder
  }

  export type room_bookingMaxOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    room?: SortOrder
    meeting_title?: SortOrder
    attendees?: SortOrder
    start_datetime?: SortOrder
    end_datetime?: SortOrder
    need_equipment?: SortOrder
    notes?: SortOrder
  }

  export type room_bookingMinOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    room?: SortOrder
    meeting_title?: SortOrder
    attendees?: SortOrder
    start_datetime?: SortOrder
    end_datetime?: SortOrder
    need_equipment?: SortOrder
    notes?: SortOrder
  }

  export type room_bookingSumOrderByAggregateInput = {
    user?: SortOrder
    room?: SortOrder
    attendees?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type GroupNullableScalarRelationFilter = {
    is?: groupWhereInput | null
    isNot?: groupWhereInput | null
  }

  export type PositionNullableScalarRelationFilter = {
    is?: positionWhereInput | null
    isNot?: positionWhereInput | null
  }

  export type Position_levelNullableScalarRelationFilter = {
    is?: position_levelWhereInput | null
    isNot?: position_levelWhereInput | null
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    prefix?: SortOrder
    thai_f_name?: SortOrder
    thai_l_name?: SortOrder
    eng_f_name?: SortOrder
    eng_l_name?: SortOrder
    phone?: SortOrder
    line_id?: SortOrder
    role?: SortOrder
    status?: SortOrder
    group?: SortOrder
    position?: SortOrder
    position_level?: SortOrder
    avatar_id?: SortOrder
    create_at?: SortOrder
    hashedRefreshToken?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
    group?: SortOrder
    position?: SortOrder
    position_level?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    prefix?: SortOrder
    thai_f_name?: SortOrder
    thai_l_name?: SortOrder
    eng_f_name?: SortOrder
    eng_l_name?: SortOrder
    phone?: SortOrder
    line_id?: SortOrder
    role?: SortOrder
    status?: SortOrder
    group?: SortOrder
    position?: SortOrder
    position_level?: SortOrder
    avatar_id?: SortOrder
    create_at?: SortOrder
    hashedRefreshToken?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    prefix?: SortOrder
    thai_f_name?: SortOrder
    thai_l_name?: SortOrder
    eng_f_name?: SortOrder
    eng_l_name?: SortOrder
    phone?: SortOrder
    line_id?: SortOrder
    role?: SortOrder
    status?: SortOrder
    group?: SortOrder
    position?: SortOrder
    position_level?: SortOrder
    avatar_id?: SortOrder
    create_at?: SortOrder
    hashedRefreshToken?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
    group?: SortOrder
    position?: SortOrder
    position_level?: SortOrder
  }

  export type userCreateNestedManyWithoutGroupsInput = {
    create?: XOR<userCreateWithoutGroupsInput, userUncheckedCreateWithoutGroupsInput> | userCreateWithoutGroupsInput[] | userUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: userCreateOrConnectWithoutGroupsInput | userCreateOrConnectWithoutGroupsInput[]
    createMany?: userCreateManyGroupsInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type userUncheckedCreateNestedManyWithoutGroupsInput = {
    create?: XOR<userCreateWithoutGroupsInput, userUncheckedCreateWithoutGroupsInput> | userCreateWithoutGroupsInput[] | userUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: userCreateOrConnectWithoutGroupsInput | userCreateOrConnectWithoutGroupsInput[]
    createMany?: userCreateManyGroupsInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type userUpdateManyWithoutGroupsNestedInput = {
    create?: XOR<userCreateWithoutGroupsInput, userUncheckedCreateWithoutGroupsInput> | userCreateWithoutGroupsInput[] | userUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: userCreateOrConnectWithoutGroupsInput | userCreateOrConnectWithoutGroupsInput[]
    upsert?: userUpsertWithWhereUniqueWithoutGroupsInput | userUpsertWithWhereUniqueWithoutGroupsInput[]
    createMany?: userCreateManyGroupsInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutGroupsInput | userUpdateWithWhereUniqueWithoutGroupsInput[]
    updateMany?: userUpdateManyWithWhereWithoutGroupsInput | userUpdateManyWithWhereWithoutGroupsInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type userUncheckedUpdateManyWithoutGroupsNestedInput = {
    create?: XOR<userCreateWithoutGroupsInput, userUncheckedCreateWithoutGroupsInput> | userCreateWithoutGroupsInput[] | userUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: userCreateOrConnectWithoutGroupsInput | userCreateOrConnectWithoutGroupsInput[]
    upsert?: userUpsertWithWhereUniqueWithoutGroupsInput | userUpsertWithWhereUniqueWithoutGroupsInput[]
    createMany?: userCreateManyGroupsInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutGroupsInput | userUpdateWithWhereUniqueWithoutGroupsInput[]
    updateMany?: userUpdateManyWithWhereWithoutGroupsInput | userUpdateManyWithWhereWithoutGroupsInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type userCreateNestedManyWithoutPositionsInput = {
    create?: XOR<userCreateWithoutPositionsInput, userUncheckedCreateWithoutPositionsInput> | userCreateWithoutPositionsInput[] | userUncheckedCreateWithoutPositionsInput[]
    connectOrCreate?: userCreateOrConnectWithoutPositionsInput | userCreateOrConnectWithoutPositionsInput[]
    createMany?: userCreateManyPositionsInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type userUncheckedCreateNestedManyWithoutPositionsInput = {
    create?: XOR<userCreateWithoutPositionsInput, userUncheckedCreateWithoutPositionsInput> | userCreateWithoutPositionsInput[] | userUncheckedCreateWithoutPositionsInput[]
    connectOrCreate?: userCreateOrConnectWithoutPositionsInput | userCreateOrConnectWithoutPositionsInput[]
    createMany?: userCreateManyPositionsInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type userUpdateManyWithoutPositionsNestedInput = {
    create?: XOR<userCreateWithoutPositionsInput, userUncheckedCreateWithoutPositionsInput> | userCreateWithoutPositionsInput[] | userUncheckedCreateWithoutPositionsInput[]
    connectOrCreate?: userCreateOrConnectWithoutPositionsInput | userCreateOrConnectWithoutPositionsInput[]
    upsert?: userUpsertWithWhereUniqueWithoutPositionsInput | userUpsertWithWhereUniqueWithoutPositionsInput[]
    createMany?: userCreateManyPositionsInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutPositionsInput | userUpdateWithWhereUniqueWithoutPositionsInput[]
    updateMany?: userUpdateManyWithWhereWithoutPositionsInput | userUpdateManyWithWhereWithoutPositionsInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type userUncheckedUpdateManyWithoutPositionsNestedInput = {
    create?: XOR<userCreateWithoutPositionsInput, userUncheckedCreateWithoutPositionsInput> | userCreateWithoutPositionsInput[] | userUncheckedCreateWithoutPositionsInput[]
    connectOrCreate?: userCreateOrConnectWithoutPositionsInput | userCreateOrConnectWithoutPositionsInput[]
    upsert?: userUpsertWithWhereUniqueWithoutPositionsInput | userUpsertWithWhereUniqueWithoutPositionsInput[]
    createMany?: userCreateManyPositionsInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutPositionsInput | userUpdateWithWhereUniqueWithoutPositionsInput[]
    updateMany?: userUpdateManyWithWhereWithoutPositionsInput | userUpdateManyWithWhereWithoutPositionsInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type userCreateNestedManyWithoutPosition_levelsInput = {
    create?: XOR<userCreateWithoutPosition_levelsInput, userUncheckedCreateWithoutPosition_levelsInput> | userCreateWithoutPosition_levelsInput[] | userUncheckedCreateWithoutPosition_levelsInput[]
    connectOrCreate?: userCreateOrConnectWithoutPosition_levelsInput | userCreateOrConnectWithoutPosition_levelsInput[]
    createMany?: userCreateManyPosition_levelsInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type userUncheckedCreateNestedManyWithoutPosition_levelsInput = {
    create?: XOR<userCreateWithoutPosition_levelsInput, userUncheckedCreateWithoutPosition_levelsInput> | userCreateWithoutPosition_levelsInput[] | userUncheckedCreateWithoutPosition_levelsInput[]
    connectOrCreate?: userCreateOrConnectWithoutPosition_levelsInput | userCreateOrConnectWithoutPosition_levelsInput[]
    createMany?: userCreateManyPosition_levelsInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type userUpdateManyWithoutPosition_levelsNestedInput = {
    create?: XOR<userCreateWithoutPosition_levelsInput, userUncheckedCreateWithoutPosition_levelsInput> | userCreateWithoutPosition_levelsInput[] | userUncheckedCreateWithoutPosition_levelsInput[]
    connectOrCreate?: userCreateOrConnectWithoutPosition_levelsInput | userCreateOrConnectWithoutPosition_levelsInput[]
    upsert?: userUpsertWithWhereUniqueWithoutPosition_levelsInput | userUpsertWithWhereUniqueWithoutPosition_levelsInput[]
    createMany?: userCreateManyPosition_levelsInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutPosition_levelsInput | userUpdateWithWhereUniqueWithoutPosition_levelsInput[]
    updateMany?: userUpdateManyWithWhereWithoutPosition_levelsInput | userUpdateManyWithWhereWithoutPosition_levelsInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type userUncheckedUpdateManyWithoutPosition_levelsNestedInput = {
    create?: XOR<userCreateWithoutPosition_levelsInput, userUncheckedCreateWithoutPosition_levelsInput> | userCreateWithoutPosition_levelsInput[] | userUncheckedCreateWithoutPosition_levelsInput[]
    connectOrCreate?: userCreateOrConnectWithoutPosition_levelsInput | userCreateOrConnectWithoutPosition_levelsInput[]
    upsert?: userUpsertWithWhereUniqueWithoutPosition_levelsInput | userUpsertWithWhereUniqueWithoutPosition_levelsInput[]
    createMany?: userCreateManyPosition_levelsInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutPosition_levelsInput | userUpdateWithWhereUniqueWithoutPosition_levelsInput[]
    updateMany?: userUpdateManyWithWhereWithoutPosition_levelsInput | userUpdateManyWithWhereWithoutPosition_levelsInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type room_bookingCreateNestedManyWithoutRoomsInput = {
    create?: XOR<room_bookingCreateWithoutRoomsInput, room_bookingUncheckedCreateWithoutRoomsInput> | room_bookingCreateWithoutRoomsInput[] | room_bookingUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: room_bookingCreateOrConnectWithoutRoomsInput | room_bookingCreateOrConnectWithoutRoomsInput[]
    createMany?: room_bookingCreateManyRoomsInputEnvelope
    connect?: room_bookingWhereUniqueInput | room_bookingWhereUniqueInput[]
  }

  export type room_bookingUncheckedCreateNestedManyWithoutRoomsInput = {
    create?: XOR<room_bookingCreateWithoutRoomsInput, room_bookingUncheckedCreateWithoutRoomsInput> | room_bookingCreateWithoutRoomsInput[] | room_bookingUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: room_bookingCreateOrConnectWithoutRoomsInput | room_bookingCreateOrConnectWithoutRoomsInput[]
    createMany?: room_bookingCreateManyRoomsInputEnvelope
    connect?: room_bookingWhereUniqueInput | room_bookingWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type room_bookingUpdateManyWithoutRoomsNestedInput = {
    create?: XOR<room_bookingCreateWithoutRoomsInput, room_bookingUncheckedCreateWithoutRoomsInput> | room_bookingCreateWithoutRoomsInput[] | room_bookingUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: room_bookingCreateOrConnectWithoutRoomsInput | room_bookingCreateOrConnectWithoutRoomsInput[]
    upsert?: room_bookingUpsertWithWhereUniqueWithoutRoomsInput | room_bookingUpsertWithWhereUniqueWithoutRoomsInput[]
    createMany?: room_bookingCreateManyRoomsInputEnvelope
    set?: room_bookingWhereUniqueInput | room_bookingWhereUniqueInput[]
    disconnect?: room_bookingWhereUniqueInput | room_bookingWhereUniqueInput[]
    delete?: room_bookingWhereUniqueInput | room_bookingWhereUniqueInput[]
    connect?: room_bookingWhereUniqueInput | room_bookingWhereUniqueInput[]
    update?: room_bookingUpdateWithWhereUniqueWithoutRoomsInput | room_bookingUpdateWithWhereUniqueWithoutRoomsInput[]
    updateMany?: room_bookingUpdateManyWithWhereWithoutRoomsInput | room_bookingUpdateManyWithWhereWithoutRoomsInput[]
    deleteMany?: room_bookingScalarWhereInput | room_bookingScalarWhereInput[]
  }

  export type room_bookingUncheckedUpdateManyWithoutRoomsNestedInput = {
    create?: XOR<room_bookingCreateWithoutRoomsInput, room_bookingUncheckedCreateWithoutRoomsInput> | room_bookingCreateWithoutRoomsInput[] | room_bookingUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: room_bookingCreateOrConnectWithoutRoomsInput | room_bookingCreateOrConnectWithoutRoomsInput[]
    upsert?: room_bookingUpsertWithWhereUniqueWithoutRoomsInput | room_bookingUpsertWithWhereUniqueWithoutRoomsInput[]
    createMany?: room_bookingCreateManyRoomsInputEnvelope
    set?: room_bookingWhereUniqueInput | room_bookingWhereUniqueInput[]
    disconnect?: room_bookingWhereUniqueInput | room_bookingWhereUniqueInput[]
    delete?: room_bookingWhereUniqueInput | room_bookingWhereUniqueInput[]
    connect?: room_bookingWhereUniqueInput | room_bookingWhereUniqueInput[]
    update?: room_bookingUpdateWithWhereUniqueWithoutRoomsInput | room_bookingUpdateWithWhereUniqueWithoutRoomsInput[]
    updateMany?: room_bookingUpdateManyWithWhereWithoutRoomsInput | room_bookingUpdateManyWithWhereWithoutRoomsInput[]
    deleteMany?: room_bookingScalarWhereInput | room_bookingScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutBookingsInput = {
    create?: XOR<userCreateWithoutBookingsInput, userUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: userCreateOrConnectWithoutBookingsInput
    connect?: userWhereUniqueInput
  }

  export type roomCreateNestedOneWithoutBookingsInput = {
    create?: XOR<roomCreateWithoutBookingsInput, roomUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: roomCreateOrConnectWithoutBookingsInput
    connect?: roomWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type userUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<userCreateWithoutBookingsInput, userUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: userCreateOrConnectWithoutBookingsInput
    upsert?: userUpsertWithoutBookingsInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutBookingsInput, userUpdateWithoutBookingsInput>, userUncheckedUpdateWithoutBookingsInput>
  }

  export type roomUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<roomCreateWithoutBookingsInput, roomUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: roomCreateOrConnectWithoutBookingsInput
    upsert?: roomUpsertWithoutBookingsInput
    disconnect?: roomWhereInput | boolean
    delete?: roomWhereInput | boolean
    connect?: roomWhereUniqueInput
    update?: XOR<XOR<roomUpdateToOneWithWhereWithoutBookingsInput, roomUpdateWithoutBookingsInput>, roomUncheckedUpdateWithoutBookingsInput>
  }

  export type groupCreateNestedOneWithoutUsersInput = {
    create?: XOR<groupCreateWithoutUsersInput, groupUncheckedCreateWithoutUsersInput>
    connectOrCreate?: groupCreateOrConnectWithoutUsersInput
    connect?: groupWhereUniqueInput
  }

  export type positionCreateNestedOneWithoutUsersInput = {
    create?: XOR<positionCreateWithoutUsersInput, positionUncheckedCreateWithoutUsersInput>
    connectOrCreate?: positionCreateOrConnectWithoutUsersInput
    connect?: positionWhereUniqueInput
  }

  export type position_levelCreateNestedOneWithoutUsersInput = {
    create?: XOR<position_levelCreateWithoutUsersInput, position_levelUncheckedCreateWithoutUsersInput>
    connectOrCreate?: position_levelCreateOrConnectWithoutUsersInput
    connect?: position_levelWhereUniqueInput
  }

  export type room_bookingCreateNestedManyWithoutUsersInput = {
    create?: XOR<room_bookingCreateWithoutUsersInput, room_bookingUncheckedCreateWithoutUsersInput> | room_bookingCreateWithoutUsersInput[] | room_bookingUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: room_bookingCreateOrConnectWithoutUsersInput | room_bookingCreateOrConnectWithoutUsersInput[]
    createMany?: room_bookingCreateManyUsersInputEnvelope
    connect?: room_bookingWhereUniqueInput | room_bookingWhereUniqueInput[]
  }

  export type room_bookingUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<room_bookingCreateWithoutUsersInput, room_bookingUncheckedCreateWithoutUsersInput> | room_bookingCreateWithoutUsersInput[] | room_bookingUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: room_bookingCreateOrConnectWithoutUsersInput | room_bookingCreateOrConnectWithoutUsersInput[]
    createMany?: room_bookingCreateManyUsersInputEnvelope
    connect?: room_bookingWhereUniqueInput | room_bookingWhereUniqueInput[]
  }

  export type groupUpdateOneWithoutUsersNestedInput = {
    create?: XOR<groupCreateWithoutUsersInput, groupUncheckedCreateWithoutUsersInput>
    connectOrCreate?: groupCreateOrConnectWithoutUsersInput
    upsert?: groupUpsertWithoutUsersInput
    disconnect?: groupWhereInput | boolean
    delete?: groupWhereInput | boolean
    connect?: groupWhereUniqueInput
    update?: XOR<XOR<groupUpdateToOneWithWhereWithoutUsersInput, groupUpdateWithoutUsersInput>, groupUncheckedUpdateWithoutUsersInput>
  }

  export type positionUpdateOneWithoutUsersNestedInput = {
    create?: XOR<positionCreateWithoutUsersInput, positionUncheckedCreateWithoutUsersInput>
    connectOrCreate?: positionCreateOrConnectWithoutUsersInput
    upsert?: positionUpsertWithoutUsersInput
    disconnect?: positionWhereInput | boolean
    delete?: positionWhereInput | boolean
    connect?: positionWhereUniqueInput
    update?: XOR<XOR<positionUpdateToOneWithWhereWithoutUsersInput, positionUpdateWithoutUsersInput>, positionUncheckedUpdateWithoutUsersInput>
  }

  export type position_levelUpdateOneWithoutUsersNestedInput = {
    create?: XOR<position_levelCreateWithoutUsersInput, position_levelUncheckedCreateWithoutUsersInput>
    connectOrCreate?: position_levelCreateOrConnectWithoutUsersInput
    upsert?: position_levelUpsertWithoutUsersInput
    disconnect?: position_levelWhereInput | boolean
    delete?: position_levelWhereInput | boolean
    connect?: position_levelWhereUniqueInput
    update?: XOR<XOR<position_levelUpdateToOneWithWhereWithoutUsersInput, position_levelUpdateWithoutUsersInput>, position_levelUncheckedUpdateWithoutUsersInput>
  }

  export type room_bookingUpdateManyWithoutUsersNestedInput = {
    create?: XOR<room_bookingCreateWithoutUsersInput, room_bookingUncheckedCreateWithoutUsersInput> | room_bookingCreateWithoutUsersInput[] | room_bookingUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: room_bookingCreateOrConnectWithoutUsersInput | room_bookingCreateOrConnectWithoutUsersInput[]
    upsert?: room_bookingUpsertWithWhereUniqueWithoutUsersInput | room_bookingUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: room_bookingCreateManyUsersInputEnvelope
    set?: room_bookingWhereUniqueInput | room_bookingWhereUniqueInput[]
    disconnect?: room_bookingWhereUniqueInput | room_bookingWhereUniqueInput[]
    delete?: room_bookingWhereUniqueInput | room_bookingWhereUniqueInput[]
    connect?: room_bookingWhereUniqueInput | room_bookingWhereUniqueInput[]
    update?: room_bookingUpdateWithWhereUniqueWithoutUsersInput | room_bookingUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: room_bookingUpdateManyWithWhereWithoutUsersInput | room_bookingUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: room_bookingScalarWhereInput | room_bookingScalarWhereInput[]
  }

  export type room_bookingUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<room_bookingCreateWithoutUsersInput, room_bookingUncheckedCreateWithoutUsersInput> | room_bookingCreateWithoutUsersInput[] | room_bookingUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: room_bookingCreateOrConnectWithoutUsersInput | room_bookingCreateOrConnectWithoutUsersInput[]
    upsert?: room_bookingUpsertWithWhereUniqueWithoutUsersInput | room_bookingUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: room_bookingCreateManyUsersInputEnvelope
    set?: room_bookingWhereUniqueInput | room_bookingWhereUniqueInput[]
    disconnect?: room_bookingWhereUniqueInput | room_bookingWhereUniqueInput[]
    delete?: room_bookingWhereUniqueInput | room_bookingWhereUniqueInput[]
    connect?: room_bookingWhereUniqueInput | room_bookingWhereUniqueInput[]
    update?: room_bookingUpdateWithWhereUniqueWithoutUsersInput | room_bookingUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: room_bookingUpdateManyWithWhereWithoutUsersInput | room_bookingUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: room_bookingScalarWhereInput | room_bookingScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type userCreateWithoutGroupsInput = {
    username: string
    password: string
    email: string
    prefix: string
    thai_f_name: string
    thai_l_name: string
    eng_f_name: string
    eng_l_name: string
    phone: string
    line_id: string
    role?: string
    status?: boolean
    avatar_id: string
    create_at?: Date | string
    hashedRefreshToken?: string | null
    positions?: positionCreateNestedOneWithoutUsersInput
    position_levels?: position_levelCreateNestedOneWithoutUsersInput
    bookings?: room_bookingCreateNestedManyWithoutUsersInput
  }

  export type userUncheckedCreateWithoutGroupsInput = {
    id?: number
    username: string
    password: string
    email: string
    prefix: string
    thai_f_name: string
    thai_l_name: string
    eng_f_name: string
    eng_l_name: string
    phone: string
    line_id: string
    role?: string
    status?: boolean
    position: number
    position_level: number
    avatar_id: string
    create_at?: Date | string
    hashedRefreshToken?: string | null
    bookings?: room_bookingUncheckedCreateNestedManyWithoutUsersInput
  }

  export type userCreateOrConnectWithoutGroupsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutGroupsInput, userUncheckedCreateWithoutGroupsInput>
  }

  export type userCreateManyGroupsInputEnvelope = {
    data: userCreateManyGroupsInput | userCreateManyGroupsInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithWhereUniqueWithoutGroupsInput = {
    where: userWhereUniqueInput
    update: XOR<userUpdateWithoutGroupsInput, userUncheckedUpdateWithoutGroupsInput>
    create: XOR<userCreateWithoutGroupsInput, userUncheckedCreateWithoutGroupsInput>
  }

  export type userUpdateWithWhereUniqueWithoutGroupsInput = {
    where: userWhereUniqueInput
    data: XOR<userUpdateWithoutGroupsInput, userUncheckedUpdateWithoutGroupsInput>
  }

  export type userUpdateManyWithWhereWithoutGroupsInput = {
    where: userScalarWhereInput
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutGroupsInput>
  }

  export type userScalarWhereInput = {
    AND?: userScalarWhereInput | userScalarWhereInput[]
    OR?: userScalarWhereInput[]
    NOT?: userScalarWhereInput | userScalarWhereInput[]
    id?: IntFilter<"user"> | number
    username?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    prefix?: StringFilter<"user"> | string
    thai_f_name?: StringFilter<"user"> | string
    thai_l_name?: StringFilter<"user"> | string
    eng_f_name?: StringFilter<"user"> | string
    eng_l_name?: StringFilter<"user"> | string
    phone?: StringFilter<"user"> | string
    line_id?: StringFilter<"user"> | string
    role?: StringFilter<"user"> | string
    status?: BoolFilter<"user"> | boolean
    group?: IntFilter<"user"> | number
    position?: IntFilter<"user"> | number
    position_level?: IntFilter<"user"> | number
    avatar_id?: StringFilter<"user"> | string
    create_at?: DateTimeFilter<"user"> | Date | string
    hashedRefreshToken?: StringNullableFilter<"user"> | string | null
  }

  export type userCreateWithoutPositionsInput = {
    username: string
    password: string
    email: string
    prefix: string
    thai_f_name: string
    thai_l_name: string
    eng_f_name: string
    eng_l_name: string
    phone: string
    line_id: string
    role?: string
    status?: boolean
    avatar_id: string
    create_at?: Date | string
    hashedRefreshToken?: string | null
    groups?: groupCreateNestedOneWithoutUsersInput
    position_levels?: position_levelCreateNestedOneWithoutUsersInput
    bookings?: room_bookingCreateNestedManyWithoutUsersInput
  }

  export type userUncheckedCreateWithoutPositionsInput = {
    id?: number
    username: string
    password: string
    email: string
    prefix: string
    thai_f_name: string
    thai_l_name: string
    eng_f_name: string
    eng_l_name: string
    phone: string
    line_id: string
    role?: string
    status?: boolean
    group: number
    position_level: number
    avatar_id: string
    create_at?: Date | string
    hashedRefreshToken?: string | null
    bookings?: room_bookingUncheckedCreateNestedManyWithoutUsersInput
  }

  export type userCreateOrConnectWithoutPositionsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutPositionsInput, userUncheckedCreateWithoutPositionsInput>
  }

  export type userCreateManyPositionsInputEnvelope = {
    data: userCreateManyPositionsInput | userCreateManyPositionsInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithWhereUniqueWithoutPositionsInput = {
    where: userWhereUniqueInput
    update: XOR<userUpdateWithoutPositionsInput, userUncheckedUpdateWithoutPositionsInput>
    create: XOR<userCreateWithoutPositionsInput, userUncheckedCreateWithoutPositionsInput>
  }

  export type userUpdateWithWhereUniqueWithoutPositionsInput = {
    where: userWhereUniqueInput
    data: XOR<userUpdateWithoutPositionsInput, userUncheckedUpdateWithoutPositionsInput>
  }

  export type userUpdateManyWithWhereWithoutPositionsInput = {
    where: userScalarWhereInput
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutPositionsInput>
  }

  export type userCreateWithoutPosition_levelsInput = {
    username: string
    password: string
    email: string
    prefix: string
    thai_f_name: string
    thai_l_name: string
    eng_f_name: string
    eng_l_name: string
    phone: string
    line_id: string
    role?: string
    status?: boolean
    avatar_id: string
    create_at?: Date | string
    hashedRefreshToken?: string | null
    groups?: groupCreateNestedOneWithoutUsersInput
    positions?: positionCreateNestedOneWithoutUsersInput
    bookings?: room_bookingCreateNestedManyWithoutUsersInput
  }

  export type userUncheckedCreateWithoutPosition_levelsInput = {
    id?: number
    username: string
    password: string
    email: string
    prefix: string
    thai_f_name: string
    thai_l_name: string
    eng_f_name: string
    eng_l_name: string
    phone: string
    line_id: string
    role?: string
    status?: boolean
    group: number
    position: number
    avatar_id: string
    create_at?: Date | string
    hashedRefreshToken?: string | null
    bookings?: room_bookingUncheckedCreateNestedManyWithoutUsersInput
  }

  export type userCreateOrConnectWithoutPosition_levelsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutPosition_levelsInput, userUncheckedCreateWithoutPosition_levelsInput>
  }

  export type userCreateManyPosition_levelsInputEnvelope = {
    data: userCreateManyPosition_levelsInput | userCreateManyPosition_levelsInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithWhereUniqueWithoutPosition_levelsInput = {
    where: userWhereUniqueInput
    update: XOR<userUpdateWithoutPosition_levelsInput, userUncheckedUpdateWithoutPosition_levelsInput>
    create: XOR<userCreateWithoutPosition_levelsInput, userUncheckedCreateWithoutPosition_levelsInput>
  }

  export type userUpdateWithWhereUniqueWithoutPosition_levelsInput = {
    where: userWhereUniqueInput
    data: XOR<userUpdateWithoutPosition_levelsInput, userUncheckedUpdateWithoutPosition_levelsInput>
  }

  export type userUpdateManyWithWhereWithoutPosition_levelsInput = {
    where: userScalarWhereInput
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutPosition_levelsInput>
  }

  export type room_bookingCreateWithoutRoomsInput = {
    id?: string
    meeting_title: string
    attendees: number
    start_datetime: Date | string
    end_datetime: Date | string
    need_equipment: boolean
    notes?: string | null
    users?: userCreateNestedOneWithoutBookingsInput
  }

  export type room_bookingUncheckedCreateWithoutRoomsInput = {
    id?: string
    user: number
    meeting_title: string
    attendees: number
    start_datetime: Date | string
    end_datetime: Date | string
    need_equipment: boolean
    notes?: string | null
  }

  export type room_bookingCreateOrConnectWithoutRoomsInput = {
    where: room_bookingWhereUniqueInput
    create: XOR<room_bookingCreateWithoutRoomsInput, room_bookingUncheckedCreateWithoutRoomsInput>
  }

  export type room_bookingCreateManyRoomsInputEnvelope = {
    data: room_bookingCreateManyRoomsInput | room_bookingCreateManyRoomsInput[]
    skipDuplicates?: boolean
  }

  export type room_bookingUpsertWithWhereUniqueWithoutRoomsInput = {
    where: room_bookingWhereUniqueInput
    update: XOR<room_bookingUpdateWithoutRoomsInput, room_bookingUncheckedUpdateWithoutRoomsInput>
    create: XOR<room_bookingCreateWithoutRoomsInput, room_bookingUncheckedCreateWithoutRoomsInput>
  }

  export type room_bookingUpdateWithWhereUniqueWithoutRoomsInput = {
    where: room_bookingWhereUniqueInput
    data: XOR<room_bookingUpdateWithoutRoomsInput, room_bookingUncheckedUpdateWithoutRoomsInput>
  }

  export type room_bookingUpdateManyWithWhereWithoutRoomsInput = {
    where: room_bookingScalarWhereInput
    data: XOR<room_bookingUpdateManyMutationInput, room_bookingUncheckedUpdateManyWithoutRoomsInput>
  }

  export type room_bookingScalarWhereInput = {
    AND?: room_bookingScalarWhereInput | room_bookingScalarWhereInput[]
    OR?: room_bookingScalarWhereInput[]
    NOT?: room_bookingScalarWhereInput | room_bookingScalarWhereInput[]
    id?: UuidFilter<"room_booking"> | string
    user?: IntFilter<"room_booking"> | number
    room?: IntFilter<"room_booking"> | number
    meeting_title?: StringFilter<"room_booking"> | string
    attendees?: IntFilter<"room_booking"> | number
    start_datetime?: DateTimeFilter<"room_booking"> | Date | string
    end_datetime?: DateTimeFilter<"room_booking"> | Date | string
    need_equipment?: BoolFilter<"room_booking"> | boolean
    notes?: StringNullableFilter<"room_booking"> | string | null
  }

  export type userCreateWithoutBookingsInput = {
    username: string
    password: string
    email: string
    prefix: string
    thai_f_name: string
    thai_l_name: string
    eng_f_name: string
    eng_l_name: string
    phone: string
    line_id: string
    role?: string
    status?: boolean
    avatar_id: string
    create_at?: Date | string
    hashedRefreshToken?: string | null
    groups?: groupCreateNestedOneWithoutUsersInput
    positions?: positionCreateNestedOneWithoutUsersInput
    position_levels?: position_levelCreateNestedOneWithoutUsersInput
  }

  export type userUncheckedCreateWithoutBookingsInput = {
    id?: number
    username: string
    password: string
    email: string
    prefix: string
    thai_f_name: string
    thai_l_name: string
    eng_f_name: string
    eng_l_name: string
    phone: string
    line_id: string
    role?: string
    status?: boolean
    group: number
    position: number
    position_level: number
    avatar_id: string
    create_at?: Date | string
    hashedRefreshToken?: string | null
  }

  export type userCreateOrConnectWithoutBookingsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutBookingsInput, userUncheckedCreateWithoutBookingsInput>
  }

  export type roomCreateWithoutBookingsInput = {
    name: string
    image_url: string
    capacity: number
    has_equipment: boolean
  }

  export type roomUncheckedCreateWithoutBookingsInput = {
    id?: number
    name: string
    image_url: string
    capacity: number
    has_equipment: boolean
  }

  export type roomCreateOrConnectWithoutBookingsInput = {
    where: roomWhereUniqueInput
    create: XOR<roomCreateWithoutBookingsInput, roomUncheckedCreateWithoutBookingsInput>
  }

  export type userUpsertWithoutBookingsInput = {
    update: XOR<userUpdateWithoutBookingsInput, userUncheckedUpdateWithoutBookingsInput>
    create: XOR<userCreateWithoutBookingsInput, userUncheckedCreateWithoutBookingsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutBookingsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutBookingsInput, userUncheckedUpdateWithoutBookingsInput>
  }

  export type userUpdateWithoutBookingsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    thai_f_name?: StringFieldUpdateOperationsInput | string
    thai_l_name?: StringFieldUpdateOperationsInput | string
    eng_f_name?: StringFieldUpdateOperationsInput | string
    eng_l_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    line_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    avatar_id?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    groups?: groupUpdateOneWithoutUsersNestedInput
    positions?: positionUpdateOneWithoutUsersNestedInput
    position_levels?: position_levelUpdateOneWithoutUsersNestedInput
  }

  export type userUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    thai_f_name?: StringFieldUpdateOperationsInput | string
    thai_l_name?: StringFieldUpdateOperationsInput | string
    eng_f_name?: StringFieldUpdateOperationsInput | string
    eng_l_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    line_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    group?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    position_level?: IntFieldUpdateOperationsInput | number
    avatar_id?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type roomUpsertWithoutBookingsInput = {
    update: XOR<roomUpdateWithoutBookingsInput, roomUncheckedUpdateWithoutBookingsInput>
    create: XOR<roomCreateWithoutBookingsInput, roomUncheckedCreateWithoutBookingsInput>
    where?: roomWhereInput
  }

  export type roomUpdateToOneWithWhereWithoutBookingsInput = {
    where?: roomWhereInput
    data: XOR<roomUpdateWithoutBookingsInput, roomUncheckedUpdateWithoutBookingsInput>
  }

  export type roomUpdateWithoutBookingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    has_equipment?: BoolFieldUpdateOperationsInput | boolean
  }

  export type roomUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    has_equipment?: BoolFieldUpdateOperationsInput | boolean
  }

  export type groupCreateWithoutUsersInput = {
    name: string
  }

  export type groupUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
  }

  export type groupCreateOrConnectWithoutUsersInput = {
    where: groupWhereUniqueInput
    create: XOR<groupCreateWithoutUsersInput, groupUncheckedCreateWithoutUsersInput>
  }

  export type positionCreateWithoutUsersInput = {
    name: string
  }

  export type positionUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
  }

  export type positionCreateOrConnectWithoutUsersInput = {
    where: positionWhereUniqueInput
    create: XOR<positionCreateWithoutUsersInput, positionUncheckedCreateWithoutUsersInput>
  }

  export type position_levelCreateWithoutUsersInput = {
    name: string
  }

  export type position_levelUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
  }

  export type position_levelCreateOrConnectWithoutUsersInput = {
    where: position_levelWhereUniqueInput
    create: XOR<position_levelCreateWithoutUsersInput, position_levelUncheckedCreateWithoutUsersInput>
  }

  export type room_bookingCreateWithoutUsersInput = {
    id?: string
    meeting_title: string
    attendees: number
    start_datetime: Date | string
    end_datetime: Date | string
    need_equipment: boolean
    notes?: string | null
    rooms?: roomCreateNestedOneWithoutBookingsInput
  }

  export type room_bookingUncheckedCreateWithoutUsersInput = {
    id?: string
    room: number
    meeting_title: string
    attendees: number
    start_datetime: Date | string
    end_datetime: Date | string
    need_equipment: boolean
    notes?: string | null
  }

  export type room_bookingCreateOrConnectWithoutUsersInput = {
    where: room_bookingWhereUniqueInput
    create: XOR<room_bookingCreateWithoutUsersInput, room_bookingUncheckedCreateWithoutUsersInput>
  }

  export type room_bookingCreateManyUsersInputEnvelope = {
    data: room_bookingCreateManyUsersInput | room_bookingCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type groupUpsertWithoutUsersInput = {
    update: XOR<groupUpdateWithoutUsersInput, groupUncheckedUpdateWithoutUsersInput>
    create: XOR<groupCreateWithoutUsersInput, groupUncheckedCreateWithoutUsersInput>
    where?: groupWhereInput
  }

  export type groupUpdateToOneWithWhereWithoutUsersInput = {
    where?: groupWhereInput
    data: XOR<groupUpdateWithoutUsersInput, groupUncheckedUpdateWithoutUsersInput>
  }

  export type groupUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type groupUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type positionUpsertWithoutUsersInput = {
    update: XOR<positionUpdateWithoutUsersInput, positionUncheckedUpdateWithoutUsersInput>
    create: XOR<positionCreateWithoutUsersInput, positionUncheckedCreateWithoutUsersInput>
    where?: positionWhereInput
  }

  export type positionUpdateToOneWithWhereWithoutUsersInput = {
    where?: positionWhereInput
    data: XOR<positionUpdateWithoutUsersInput, positionUncheckedUpdateWithoutUsersInput>
  }

  export type positionUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type positionUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type position_levelUpsertWithoutUsersInput = {
    update: XOR<position_levelUpdateWithoutUsersInput, position_levelUncheckedUpdateWithoutUsersInput>
    create: XOR<position_levelCreateWithoutUsersInput, position_levelUncheckedCreateWithoutUsersInput>
    where?: position_levelWhereInput
  }

  export type position_levelUpdateToOneWithWhereWithoutUsersInput = {
    where?: position_levelWhereInput
    data: XOR<position_levelUpdateWithoutUsersInput, position_levelUncheckedUpdateWithoutUsersInput>
  }

  export type position_levelUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type position_levelUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type room_bookingUpsertWithWhereUniqueWithoutUsersInput = {
    where: room_bookingWhereUniqueInput
    update: XOR<room_bookingUpdateWithoutUsersInput, room_bookingUncheckedUpdateWithoutUsersInput>
    create: XOR<room_bookingCreateWithoutUsersInput, room_bookingUncheckedCreateWithoutUsersInput>
  }

  export type room_bookingUpdateWithWhereUniqueWithoutUsersInput = {
    where: room_bookingWhereUniqueInput
    data: XOR<room_bookingUpdateWithoutUsersInput, room_bookingUncheckedUpdateWithoutUsersInput>
  }

  export type room_bookingUpdateManyWithWhereWithoutUsersInput = {
    where: room_bookingScalarWhereInput
    data: XOR<room_bookingUpdateManyMutationInput, room_bookingUncheckedUpdateManyWithoutUsersInput>
  }

  export type userCreateManyGroupsInput = {
    id?: number
    username: string
    password: string
    email: string
    prefix: string
    thai_f_name: string
    thai_l_name: string
    eng_f_name: string
    eng_l_name: string
    phone: string
    line_id: string
    role?: string
    status?: boolean
    position: number
    position_level: number
    avatar_id: string
    create_at?: Date | string
    hashedRefreshToken?: string | null
  }

  export type userUpdateWithoutGroupsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    thai_f_name?: StringFieldUpdateOperationsInput | string
    thai_l_name?: StringFieldUpdateOperationsInput | string
    eng_f_name?: StringFieldUpdateOperationsInput | string
    eng_l_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    line_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    avatar_id?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    positions?: positionUpdateOneWithoutUsersNestedInput
    position_levels?: position_levelUpdateOneWithoutUsersNestedInput
    bookings?: room_bookingUpdateManyWithoutUsersNestedInput
  }

  export type userUncheckedUpdateWithoutGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    thai_f_name?: StringFieldUpdateOperationsInput | string
    thai_l_name?: StringFieldUpdateOperationsInput | string
    eng_f_name?: StringFieldUpdateOperationsInput | string
    eng_l_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    line_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    position?: IntFieldUpdateOperationsInput | number
    position_level?: IntFieldUpdateOperationsInput | number
    avatar_id?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: room_bookingUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type userUncheckedUpdateManyWithoutGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    thai_f_name?: StringFieldUpdateOperationsInput | string
    thai_l_name?: StringFieldUpdateOperationsInput | string
    eng_f_name?: StringFieldUpdateOperationsInput | string
    eng_l_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    line_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    position?: IntFieldUpdateOperationsInput | number
    position_level?: IntFieldUpdateOperationsInput | number
    avatar_id?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userCreateManyPositionsInput = {
    id?: number
    username: string
    password: string
    email: string
    prefix: string
    thai_f_name: string
    thai_l_name: string
    eng_f_name: string
    eng_l_name: string
    phone: string
    line_id: string
    role?: string
    status?: boolean
    group: number
    position_level: number
    avatar_id: string
    create_at?: Date | string
    hashedRefreshToken?: string | null
  }

  export type userUpdateWithoutPositionsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    thai_f_name?: StringFieldUpdateOperationsInput | string
    thai_l_name?: StringFieldUpdateOperationsInput | string
    eng_f_name?: StringFieldUpdateOperationsInput | string
    eng_l_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    line_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    avatar_id?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    groups?: groupUpdateOneWithoutUsersNestedInput
    position_levels?: position_levelUpdateOneWithoutUsersNestedInput
    bookings?: room_bookingUpdateManyWithoutUsersNestedInput
  }

  export type userUncheckedUpdateWithoutPositionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    thai_f_name?: StringFieldUpdateOperationsInput | string
    thai_l_name?: StringFieldUpdateOperationsInput | string
    eng_f_name?: StringFieldUpdateOperationsInput | string
    eng_l_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    line_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    group?: IntFieldUpdateOperationsInput | number
    position_level?: IntFieldUpdateOperationsInput | number
    avatar_id?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: room_bookingUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type userUncheckedUpdateManyWithoutPositionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    thai_f_name?: StringFieldUpdateOperationsInput | string
    thai_l_name?: StringFieldUpdateOperationsInput | string
    eng_f_name?: StringFieldUpdateOperationsInput | string
    eng_l_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    line_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    group?: IntFieldUpdateOperationsInput | number
    position_level?: IntFieldUpdateOperationsInput | number
    avatar_id?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userCreateManyPosition_levelsInput = {
    id?: number
    username: string
    password: string
    email: string
    prefix: string
    thai_f_name: string
    thai_l_name: string
    eng_f_name: string
    eng_l_name: string
    phone: string
    line_id: string
    role?: string
    status?: boolean
    group: number
    position: number
    avatar_id: string
    create_at?: Date | string
    hashedRefreshToken?: string | null
  }

  export type userUpdateWithoutPosition_levelsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    thai_f_name?: StringFieldUpdateOperationsInput | string
    thai_l_name?: StringFieldUpdateOperationsInput | string
    eng_f_name?: StringFieldUpdateOperationsInput | string
    eng_l_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    line_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    avatar_id?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    groups?: groupUpdateOneWithoutUsersNestedInput
    positions?: positionUpdateOneWithoutUsersNestedInput
    bookings?: room_bookingUpdateManyWithoutUsersNestedInput
  }

  export type userUncheckedUpdateWithoutPosition_levelsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    thai_f_name?: StringFieldUpdateOperationsInput | string
    thai_l_name?: StringFieldUpdateOperationsInput | string
    eng_f_name?: StringFieldUpdateOperationsInput | string
    eng_l_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    line_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    group?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    avatar_id?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: room_bookingUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type userUncheckedUpdateManyWithoutPosition_levelsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    thai_f_name?: StringFieldUpdateOperationsInput | string
    thai_l_name?: StringFieldUpdateOperationsInput | string
    eng_f_name?: StringFieldUpdateOperationsInput | string
    eng_l_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    line_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    group?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    avatar_id?: StringFieldUpdateOperationsInput | string
    create_at?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type room_bookingCreateManyRoomsInput = {
    id?: string
    user: number
    meeting_title: string
    attendees: number
    start_datetime: Date | string
    end_datetime: Date | string
    need_equipment: boolean
    notes?: string | null
  }

  export type room_bookingUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    meeting_title?: StringFieldUpdateOperationsInput | string
    attendees?: IntFieldUpdateOperationsInput | number
    start_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    end_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    need_equipment?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    users?: userUpdateOneWithoutBookingsNestedInput
  }

  export type room_bookingUncheckedUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: IntFieldUpdateOperationsInput | number
    meeting_title?: StringFieldUpdateOperationsInput | string
    attendees?: IntFieldUpdateOperationsInput | number
    start_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    end_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    need_equipment?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type room_bookingUncheckedUpdateManyWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: IntFieldUpdateOperationsInput | number
    meeting_title?: StringFieldUpdateOperationsInput | string
    attendees?: IntFieldUpdateOperationsInput | number
    start_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    end_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    need_equipment?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type room_bookingCreateManyUsersInput = {
    id?: string
    room: number
    meeting_title: string
    attendees: number
    start_datetime: Date | string
    end_datetime: Date | string
    need_equipment: boolean
    notes?: string | null
  }

  export type room_bookingUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    meeting_title?: StringFieldUpdateOperationsInput | string
    attendees?: IntFieldUpdateOperationsInput | number
    start_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    end_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    need_equipment?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: roomUpdateOneWithoutBookingsNestedInput
  }

  export type room_bookingUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    room?: IntFieldUpdateOperationsInput | number
    meeting_title?: StringFieldUpdateOperationsInput | string
    attendees?: IntFieldUpdateOperationsInput | number
    start_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    end_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    need_equipment?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type room_bookingUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    room?: IntFieldUpdateOperationsInput | number
    meeting_title?: StringFieldUpdateOperationsInput | string
    attendees?: IntFieldUpdateOperationsInput | number
    start_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    end_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    need_equipment?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }



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