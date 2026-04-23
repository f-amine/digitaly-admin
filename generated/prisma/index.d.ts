
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductAsset
 * 
 */
export type ProductAsset = $Result.DefaultSelection<Prisma.$ProductAssetPayload>
/**
 * Model UserLicense
 * 
 */
export type UserLicense = $Result.DefaultSelection<Prisma.$UserLicensePayload>
/**
 * Model Integration
 * 
 */
export type Integration = $Result.DefaultSelection<Prisma.$IntegrationPayload>
/**
 * Model GeneratedContent
 * 
 */
export type GeneratedContent = $Result.DefaultSelection<Prisma.$GeneratedContentPayload>
/**
 * Model SavedProduct
 * 
 */
export type SavedProduct = $Result.DefaultSelection<Prisma.$SavedProductPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  FREE_USER: 'FREE_USER',
  PRO_MEMBER: 'PRO_MEMBER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const Difficulty: {
  BEGINNER: 'BEGINNER',
  FAST_LAUNCH: 'FAST_LAUNCH',
  ADVANCED: 'ADVANCED'
};

export type Difficulty = (typeof Difficulty)[keyof typeof Difficulty]


export const LicenseType: {
  SHARED: 'SHARED',
  EXCLUSIVE: 'EXCLUSIVE'
};

export type LicenseType = (typeof LicenseType)[keyof typeof LicenseType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type Difficulty = $Enums.Difficulty

export const Difficulty: typeof $Enums.Difficulty

export type LicenseType = $Enums.LicenseType

export const LicenseType: typeof $Enums.LicenseType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productAsset`: Exposes CRUD operations for the **ProductAsset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductAssets
    * const productAssets = await prisma.productAsset.findMany()
    * ```
    */
  get productAsset(): Prisma.ProductAssetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userLicense`: Exposes CRUD operations for the **UserLicense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserLicenses
    * const userLicenses = await prisma.userLicense.findMany()
    * ```
    */
  get userLicense(): Prisma.UserLicenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.integration`: Exposes CRUD operations for the **Integration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Integrations
    * const integrations = await prisma.integration.findMany()
    * ```
    */
  get integration(): Prisma.IntegrationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.generatedContent`: Exposes CRUD operations for the **GeneratedContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GeneratedContents
    * const generatedContents = await prisma.generatedContent.findMany()
    * ```
    */
  get generatedContent(): Prisma.GeneratedContentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savedProduct`: Exposes CRUD operations for the **SavedProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedProducts
    * const savedProducts = await prisma.savedProduct.findMany()
    * ```
    */
  get savedProduct(): Prisma.SavedProductDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification',
    Post: 'Post',
    Product: 'Product',
    ProductAsset: 'ProductAsset',
    UserLicense: 'UserLicense',
    Integration: 'Integration',
    GeneratedContent: 'GeneratedContent',
    SavedProduct: 'SavedProduct'
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
      modelProps: "user" | "session" | "account" | "verification" | "post" | "product" | "productAsset" | "userLicense" | "integration" | "generatedContent" | "savedProduct"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductAsset: {
        payload: Prisma.$ProductAssetPayload<ExtArgs>
        fields: Prisma.ProductAssetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductAssetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAssetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductAssetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAssetPayload>
          }
          findFirst: {
            args: Prisma.ProductAssetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAssetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductAssetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAssetPayload>
          }
          findMany: {
            args: Prisma.ProductAssetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAssetPayload>[]
          }
          create: {
            args: Prisma.ProductAssetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAssetPayload>
          }
          createMany: {
            args: Prisma.ProductAssetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductAssetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAssetPayload>[]
          }
          delete: {
            args: Prisma.ProductAssetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAssetPayload>
          }
          update: {
            args: Prisma.ProductAssetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAssetPayload>
          }
          deleteMany: {
            args: Prisma.ProductAssetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductAssetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductAssetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAssetPayload>[]
          }
          upsert: {
            args: Prisma.ProductAssetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAssetPayload>
          }
          aggregate: {
            args: Prisma.ProductAssetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductAsset>
          }
          groupBy: {
            args: Prisma.ProductAssetGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductAssetGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductAssetCountArgs<ExtArgs>
            result: $Utils.Optional<ProductAssetCountAggregateOutputType> | number
          }
        }
      }
      UserLicense: {
        payload: Prisma.$UserLicensePayload<ExtArgs>
        fields: Prisma.UserLicenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserLicenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLicensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserLicenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLicensePayload>
          }
          findFirst: {
            args: Prisma.UserLicenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLicensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserLicenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLicensePayload>
          }
          findMany: {
            args: Prisma.UserLicenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLicensePayload>[]
          }
          create: {
            args: Prisma.UserLicenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLicensePayload>
          }
          createMany: {
            args: Prisma.UserLicenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserLicenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLicensePayload>[]
          }
          delete: {
            args: Prisma.UserLicenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLicensePayload>
          }
          update: {
            args: Prisma.UserLicenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLicensePayload>
          }
          deleteMany: {
            args: Prisma.UserLicenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserLicenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserLicenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLicensePayload>[]
          }
          upsert: {
            args: Prisma.UserLicenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLicensePayload>
          }
          aggregate: {
            args: Prisma.UserLicenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserLicense>
          }
          groupBy: {
            args: Prisma.UserLicenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserLicenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserLicenseCountArgs<ExtArgs>
            result: $Utils.Optional<UserLicenseCountAggregateOutputType> | number
          }
        }
      }
      Integration: {
        payload: Prisma.$IntegrationPayload<ExtArgs>
        fields: Prisma.IntegrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IntegrationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IntegrationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>
          }
          findFirst: {
            args: Prisma.IntegrationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IntegrationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>
          }
          findMany: {
            args: Prisma.IntegrationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>[]
          }
          create: {
            args: Prisma.IntegrationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>
          }
          createMany: {
            args: Prisma.IntegrationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IntegrationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>[]
          }
          delete: {
            args: Prisma.IntegrationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>
          }
          update: {
            args: Prisma.IntegrationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>
          }
          deleteMany: {
            args: Prisma.IntegrationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IntegrationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IntegrationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>[]
          }
          upsert: {
            args: Prisma.IntegrationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>
          }
          aggregate: {
            args: Prisma.IntegrationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIntegration>
          }
          groupBy: {
            args: Prisma.IntegrationGroupByArgs<ExtArgs>
            result: $Utils.Optional<IntegrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.IntegrationCountArgs<ExtArgs>
            result: $Utils.Optional<IntegrationCountAggregateOutputType> | number
          }
        }
      }
      GeneratedContent: {
        payload: Prisma.$GeneratedContentPayload<ExtArgs>
        fields: Prisma.GeneratedContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GeneratedContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GeneratedContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedContentPayload>
          }
          findFirst: {
            args: Prisma.GeneratedContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GeneratedContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedContentPayload>
          }
          findMany: {
            args: Prisma.GeneratedContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedContentPayload>[]
          }
          create: {
            args: Prisma.GeneratedContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedContentPayload>
          }
          createMany: {
            args: Prisma.GeneratedContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GeneratedContentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedContentPayload>[]
          }
          delete: {
            args: Prisma.GeneratedContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedContentPayload>
          }
          update: {
            args: Prisma.GeneratedContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedContentPayload>
          }
          deleteMany: {
            args: Prisma.GeneratedContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GeneratedContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GeneratedContentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedContentPayload>[]
          }
          upsert: {
            args: Prisma.GeneratedContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedContentPayload>
          }
          aggregate: {
            args: Prisma.GeneratedContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGeneratedContent>
          }
          groupBy: {
            args: Prisma.GeneratedContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<GeneratedContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.GeneratedContentCountArgs<ExtArgs>
            result: $Utils.Optional<GeneratedContentCountAggregateOutputType> | number
          }
        }
      }
      SavedProduct: {
        payload: Prisma.$SavedProductPayload<ExtArgs>
        fields: Prisma.SavedProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavedProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavedProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProductPayload>
          }
          findFirst: {
            args: Prisma.SavedProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavedProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProductPayload>
          }
          findMany: {
            args: Prisma.SavedProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProductPayload>[]
          }
          create: {
            args: Prisma.SavedProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProductPayload>
          }
          createMany: {
            args: Prisma.SavedProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SavedProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProductPayload>[]
          }
          delete: {
            args: Prisma.SavedProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProductPayload>
          }
          update: {
            args: Prisma.SavedProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProductPayload>
          }
          deleteMany: {
            args: Prisma.SavedProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavedProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SavedProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProductPayload>[]
          }
          upsert: {
            args: Prisma.SavedProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProductPayload>
          }
          aggregate: {
            args: Prisma.SavedProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavedProduct>
          }
          groupBy: {
            args: Prisma.SavedProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavedProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavedProductCountArgs<ExtArgs>
            result: $Utils.Optional<SavedProductCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
    post?: PostOmit
    product?: ProductOmit
    productAsset?: ProductAssetOmit
    userLicense?: UserLicenseOmit
    integration?: IntegrationOmit
    generatedContent?: GeneratedContentOmit
    savedProduct?: SavedProductOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    accounts: number
    posts: number
    licenses: number
    savedProducts: number
    integrations: number
    generatedContent: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    licenses?: boolean | UserCountOutputTypeCountLicensesArgs
    savedProducts?: boolean | UserCountOutputTypeCountSavedProductsArgs
    integrations?: boolean | UserCountOutputTypeCountIntegrationsArgs
    generatedContent?: boolean | UserCountOutputTypeCountGeneratedContentArgs
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
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLicensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLicenseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSavedProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedProductWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIntegrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntegrationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGeneratedContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneratedContentWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    assets: number
    licenses: number
    savedBy: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assets?: boolean | ProductCountOutputTypeCountAssetsArgs
    licenses?: boolean | ProductCountOutputTypeCountLicensesArgs
    savedBy?: boolean | ProductCountOutputTypeCountSavedByArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductAssetWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountLicensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLicenseWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountSavedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedProductWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    freeLicenseAvailable: number | null
    kitsClaimedThisPeriod: number | null
    extraKits: number | null
  }

  export type UserSumAggregateOutputType = {
    freeLicenseAvailable: number | null
    kitsClaimedThisPeriod: number | null
    extraKits: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    role: $Enums.UserRole | null
    freeLicenseAvailable: number | null
    kitsClaimedThisPeriod: number | null
    kitPeriodStart: Date | null
    extraKits: number | null
    onboardingCompleted: boolean | null
    experienceLevel: string | null
    primaryGoal: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    role: $Enums.UserRole | null
    freeLicenseAvailable: number | null
    kitsClaimedThisPeriod: number | null
    kitPeriodStart: Date | null
    extraKits: number | null
    onboardingCompleted: boolean | null
    experienceLevel: string | null
    primaryGoal: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    role: number
    freeLicenseAvailable: number
    kitsClaimedThisPeriod: number
    kitPeriodStart: number
    extraKits: number
    onboardingCompleted: number
    experienceLevel: number
    sellingPlatforms: number
    interestedNiches: number
    primaryGoal: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    freeLicenseAvailable?: true
    kitsClaimedThisPeriod?: true
    extraKits?: true
  }

  export type UserSumAggregateInputType = {
    freeLicenseAvailable?: true
    kitsClaimedThisPeriod?: true
    extraKits?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
    freeLicenseAvailable?: true
    kitsClaimedThisPeriod?: true
    kitPeriodStart?: true
    extraKits?: true
    onboardingCompleted?: true
    experienceLevel?: true
    primaryGoal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
    freeLicenseAvailable?: true
    kitsClaimedThisPeriod?: true
    kitPeriodStart?: true
    extraKits?: true
    onboardingCompleted?: true
    experienceLevel?: true
    primaryGoal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
    freeLicenseAvailable?: true
    kitsClaimedThisPeriod?: true
    kitPeriodStart?: true
    extraKits?: true
    onboardingCompleted?: true
    experienceLevel?: true
    sellingPlatforms?: true
    interestedNiches?: true
    primaryGoal?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image: string | null
    role: $Enums.UserRole
    freeLicenseAvailable: number
    kitsClaimedThisPeriod: number
    kitPeriodStart: Date | null
    extraKits: number
    onboardingCompleted: boolean
    experienceLevel: string | null
    sellingPlatforms: string[]
    interestedNiches: string[]
    primaryGoal: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    freeLicenseAvailable?: boolean
    kitsClaimedThisPeriod?: boolean
    kitPeriodStart?: boolean
    extraKits?: boolean
    onboardingCompleted?: boolean
    experienceLevel?: boolean
    sellingPlatforms?: boolean
    interestedNiches?: boolean
    primaryGoal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    licenses?: boolean | User$licensesArgs<ExtArgs>
    savedProducts?: boolean | User$savedProductsArgs<ExtArgs>
    integrations?: boolean | User$integrationsArgs<ExtArgs>
    generatedContent?: boolean | User$generatedContentArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    freeLicenseAvailable?: boolean
    kitsClaimedThisPeriod?: boolean
    kitPeriodStart?: boolean
    extraKits?: boolean
    onboardingCompleted?: boolean
    experienceLevel?: boolean
    sellingPlatforms?: boolean
    interestedNiches?: boolean
    primaryGoal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    freeLicenseAvailable?: boolean
    kitsClaimedThisPeriod?: boolean
    kitPeriodStart?: boolean
    extraKits?: boolean
    onboardingCompleted?: boolean
    experienceLevel?: boolean
    sellingPlatforms?: boolean
    interestedNiches?: boolean
    primaryGoal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    freeLicenseAvailable?: boolean
    kitsClaimedThisPeriod?: boolean
    kitPeriodStart?: boolean
    extraKits?: boolean
    onboardingCompleted?: boolean
    experienceLevel?: boolean
    sellingPlatforms?: boolean
    interestedNiches?: boolean
    primaryGoal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "role" | "freeLicenseAvailable" | "kitsClaimedThisPeriod" | "kitPeriodStart" | "extraKits" | "onboardingCompleted" | "experienceLevel" | "sellingPlatforms" | "interestedNiches" | "primaryGoal" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    licenses?: boolean | User$licensesArgs<ExtArgs>
    savedProducts?: boolean | User$savedProductsArgs<ExtArgs>
    integrations?: boolean | User$integrationsArgs<ExtArgs>
    generatedContent?: boolean | User$generatedContentArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      licenses: Prisma.$UserLicensePayload<ExtArgs>[]
      savedProducts: Prisma.$SavedProductPayload<ExtArgs>[]
      integrations: Prisma.$IntegrationPayload<ExtArgs>[]
      generatedContent: Prisma.$GeneratedContentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: boolean
      image: string | null
      role: $Enums.UserRole
      freeLicenseAvailable: number
      kitsClaimedThisPeriod: number
      kitPeriodStart: Date | null
      extraKits: number
      onboardingCompleted: boolean
      experienceLevel: string | null
      sellingPlatforms: string[]
      interestedNiches: string[]
      primaryGoal: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
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
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    licenses<T extends User$licensesArgs<ExtArgs> = {}>(args?: Subset<T, User$licensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLicensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    savedProducts<T extends User$savedProductsArgs<ExtArgs> = {}>(args?: Subset<T, User$savedProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    integrations<T extends User$integrationsArgs<ExtArgs> = {}>(args?: Subset<T, User$integrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    generatedContent<T extends User$generatedContentArgs<ExtArgs> = {}>(args?: Subset<T, User$generatedContentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly freeLicenseAvailable: FieldRef<"User", 'Int'>
    readonly kitsClaimedThisPeriod: FieldRef<"User", 'Int'>
    readonly kitPeriodStart: FieldRef<"User", 'DateTime'>
    readonly extraKits: FieldRef<"User", 'Int'>
    readonly onboardingCompleted: FieldRef<"User", 'Boolean'>
    readonly experienceLevel: FieldRef<"User", 'String'>
    readonly sellingPlatforms: FieldRef<"User", 'String[]'>
    readonly interestedNiches: FieldRef<"User", 'String[]'>
    readonly primaryGoal: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.licenses
   */
  export type User$licensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLicense
     */
    select?: UserLicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLicense
     */
    omit?: UserLicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLicenseInclude<ExtArgs> | null
    where?: UserLicenseWhereInput
    orderBy?: UserLicenseOrderByWithRelationInput | UserLicenseOrderByWithRelationInput[]
    cursor?: UserLicenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserLicenseScalarFieldEnum | UserLicenseScalarFieldEnum[]
  }

  /**
   * User.savedProducts
   */
  export type User$savedProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductInclude<ExtArgs> | null
    where?: SavedProductWhereInput
    orderBy?: SavedProductOrderByWithRelationInput | SavedProductOrderByWithRelationInput[]
    cursor?: SavedProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedProductScalarFieldEnum | SavedProductScalarFieldEnum[]
  }

  /**
   * User.integrations
   */
  export type User$integrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    where?: IntegrationWhereInput
    orderBy?: IntegrationOrderByWithRelationInput | IntegrationOrderByWithRelationInput[]
    cursor?: IntegrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IntegrationScalarFieldEnum | IntegrationScalarFieldEnum[]
  }

  /**
   * User.generatedContent
   */
  export type User$generatedContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedContent
     */
    select?: GeneratedContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedContent
     */
    omit?: GeneratedContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedContentInclude<ExtArgs> | null
    where?: GeneratedContentWhereInput
    orderBy?: GeneratedContentOrderByWithRelationInput | GeneratedContentOrderByWithRelationInput[]
    cursor?: GeneratedContentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GeneratedContentScalarFieldEnum | GeneratedContentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
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
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
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
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    createdById: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    createdById: string
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "createdById", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
      createdById: string
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly name: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
    readonly createdById: FieldRef<"Post", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    totalLicenses: number | null
    claimedLicenses: number | null
    exclusiveLicensePrice: number | null
  }

  export type ProductSumAggregateOutputType = {
    totalLicenses: number | null
    claimedLicenses: number | null
    exclusiveLicensePrice: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    shortDescription: string | null
    image: string | null
    isFreeProduct: boolean | null
    totalLicenses: number | null
    claimedLicenses: number | null
    category: string | null
    featured: boolean | null
    difficulty: $Enums.Difficulty | null
    demandLabel: string | null
    exclusiveLicensePrice: number | null
    exclusiveLicenseSold: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    shortDescription: string | null
    image: string | null
    isFreeProduct: boolean | null
    totalLicenses: number | null
    claimedLicenses: number | null
    category: string | null
    featured: boolean | null
    difficulty: $Enums.Difficulty | null
    demandLabel: string | null
    exclusiveLicensePrice: number | null
    exclusiveLicenseSold: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    shortDescription: number
    image: number
    isFreeProduct: number
    totalLicenses: number
    claimedLicenses: number
    category: number
    featured: number
    difficulty: number
    sellingPlatforms: number
    languages: number
    demandLabel: number
    exclusiveLicensePrice: number
    exclusiveLicenseSold: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    totalLicenses?: true
    claimedLicenses?: true
    exclusiveLicensePrice?: true
  }

  export type ProductSumAggregateInputType = {
    totalLicenses?: true
    claimedLicenses?: true
    exclusiveLicensePrice?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    shortDescription?: true
    image?: true
    isFreeProduct?: true
    totalLicenses?: true
    claimedLicenses?: true
    category?: true
    featured?: true
    difficulty?: true
    demandLabel?: true
    exclusiveLicensePrice?: true
    exclusiveLicenseSold?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    shortDescription?: true
    image?: true
    isFreeProduct?: true
    totalLicenses?: true
    claimedLicenses?: true
    category?: true
    featured?: true
    difficulty?: true
    demandLabel?: true
    exclusiveLicensePrice?: true
    exclusiveLicenseSold?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    shortDescription?: true
    image?: true
    isFreeProduct?: true
    totalLicenses?: true
    claimedLicenses?: true
    category?: true
    featured?: true
    difficulty?: true
    sellingPlatforms?: true
    languages?: true
    demandLabel?: true
    exclusiveLicensePrice?: true
    exclusiveLicenseSold?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string
    shortDescription: string
    image: string | null
    isFreeProduct: boolean
    totalLicenses: number
    claimedLicenses: number
    category: string
    featured: boolean
    difficulty: $Enums.Difficulty
    sellingPlatforms: string[]
    languages: string[]
    demandLabel: string | null
    exclusiveLicensePrice: number | null
    exclusiveLicenseSold: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    shortDescription?: boolean
    image?: boolean
    isFreeProduct?: boolean
    totalLicenses?: boolean
    claimedLicenses?: boolean
    category?: boolean
    featured?: boolean
    difficulty?: boolean
    sellingPlatforms?: boolean
    languages?: boolean
    demandLabel?: boolean
    exclusiveLicensePrice?: boolean
    exclusiveLicenseSold?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assets?: boolean | Product$assetsArgs<ExtArgs>
    licenses?: boolean | Product$licensesArgs<ExtArgs>
    savedBy?: boolean | Product$savedByArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    shortDescription?: boolean
    image?: boolean
    isFreeProduct?: boolean
    totalLicenses?: boolean
    claimedLicenses?: boolean
    category?: boolean
    featured?: boolean
    difficulty?: boolean
    sellingPlatforms?: boolean
    languages?: boolean
    demandLabel?: boolean
    exclusiveLicensePrice?: boolean
    exclusiveLicenseSold?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    shortDescription?: boolean
    image?: boolean
    isFreeProduct?: boolean
    totalLicenses?: boolean
    claimedLicenses?: boolean
    category?: boolean
    featured?: boolean
    difficulty?: boolean
    sellingPlatforms?: boolean
    languages?: boolean
    demandLabel?: boolean
    exclusiveLicensePrice?: boolean
    exclusiveLicenseSold?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    shortDescription?: boolean
    image?: boolean
    isFreeProduct?: boolean
    totalLicenses?: boolean
    claimedLicenses?: boolean
    category?: boolean
    featured?: boolean
    difficulty?: boolean
    sellingPlatforms?: boolean
    languages?: boolean
    demandLabel?: boolean
    exclusiveLicensePrice?: boolean
    exclusiveLicenseSold?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "shortDescription" | "image" | "isFreeProduct" | "totalLicenses" | "claimedLicenses" | "category" | "featured" | "difficulty" | "sellingPlatforms" | "languages" | "demandLabel" | "exclusiveLicensePrice" | "exclusiveLicenseSold" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assets?: boolean | Product$assetsArgs<ExtArgs>
    licenses?: boolean | Product$licensesArgs<ExtArgs>
    savedBy?: boolean | Product$savedByArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      assets: Prisma.$ProductAssetPayload<ExtArgs>[]
      licenses: Prisma.$UserLicensePayload<ExtArgs>[]
      savedBy: Prisma.$SavedProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string
      shortDescription: string
      image: string | null
      isFreeProduct: boolean
      totalLicenses: number
      claimedLicenses: number
      category: string
      featured: boolean
      difficulty: $Enums.Difficulty
      sellingPlatforms: string[]
      languages: string[]
      demandLabel: string | null
      exclusiveLicensePrice: number | null
      exclusiveLicenseSold: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assets<T extends Product$assetsArgs<ExtArgs> = {}>(args?: Subset<T, Product$assetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductAssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    licenses<T extends Product$licensesArgs<ExtArgs> = {}>(args?: Subset<T, Product$licensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLicensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    savedBy<T extends Product$savedByArgs<ExtArgs> = {}>(args?: Subset<T, Product$savedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly slug: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly shortDescription: FieldRef<"Product", 'String'>
    readonly image: FieldRef<"Product", 'String'>
    readonly isFreeProduct: FieldRef<"Product", 'Boolean'>
    readonly totalLicenses: FieldRef<"Product", 'Int'>
    readonly claimedLicenses: FieldRef<"Product", 'Int'>
    readonly category: FieldRef<"Product", 'String'>
    readonly featured: FieldRef<"Product", 'Boolean'>
    readonly difficulty: FieldRef<"Product", 'Difficulty'>
    readonly sellingPlatforms: FieldRef<"Product", 'String[]'>
    readonly languages: FieldRef<"Product", 'String[]'>
    readonly demandLabel: FieldRef<"Product", 'String'>
    readonly exclusiveLicensePrice: FieldRef<"Product", 'Float'>
    readonly exclusiveLicenseSold: FieldRef<"Product", 'Boolean'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.assets
   */
  export type Product$assetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAsset
     */
    select?: ProductAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAsset
     */
    omit?: ProductAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAssetInclude<ExtArgs> | null
    where?: ProductAssetWhereInput
    orderBy?: ProductAssetOrderByWithRelationInput | ProductAssetOrderByWithRelationInput[]
    cursor?: ProductAssetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductAssetScalarFieldEnum | ProductAssetScalarFieldEnum[]
  }

  /**
   * Product.licenses
   */
  export type Product$licensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLicense
     */
    select?: UserLicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLicense
     */
    omit?: UserLicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLicenseInclude<ExtArgs> | null
    where?: UserLicenseWhereInput
    orderBy?: UserLicenseOrderByWithRelationInput | UserLicenseOrderByWithRelationInput[]
    cursor?: UserLicenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserLicenseScalarFieldEnum | UserLicenseScalarFieldEnum[]
  }

  /**
   * Product.savedBy
   */
  export type Product$savedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductInclude<ExtArgs> | null
    where?: SavedProductWhereInput
    orderBy?: SavedProductOrderByWithRelationInput | SavedProductOrderByWithRelationInput[]
    cursor?: SavedProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedProductScalarFieldEnum | SavedProductScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductAsset
   */

  export type AggregateProductAsset = {
    _count: ProductAssetCountAggregateOutputType | null
    _min: ProductAssetMinAggregateOutputType | null
    _max: ProductAssetMaxAggregateOutputType | null
  }

  export type ProductAssetMinAggregateOutputType = {
    id: string | null
    productId: string | null
    name: string | null
    type: string | null
    fileUrl: string | null
    fileSize: string | null
    createdAt: Date | null
  }

  export type ProductAssetMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    name: string | null
    type: string | null
    fileUrl: string | null
    fileSize: string | null
    createdAt: Date | null
  }

  export type ProductAssetCountAggregateOutputType = {
    id: number
    productId: number
    name: number
    type: number
    fileUrl: number
    fileSize: number
    createdAt: number
    _all: number
  }


  export type ProductAssetMinAggregateInputType = {
    id?: true
    productId?: true
    name?: true
    type?: true
    fileUrl?: true
    fileSize?: true
    createdAt?: true
  }

  export type ProductAssetMaxAggregateInputType = {
    id?: true
    productId?: true
    name?: true
    type?: true
    fileUrl?: true
    fileSize?: true
    createdAt?: true
  }

  export type ProductAssetCountAggregateInputType = {
    id?: true
    productId?: true
    name?: true
    type?: true
    fileUrl?: true
    fileSize?: true
    createdAt?: true
    _all?: true
  }

  export type ProductAssetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductAsset to aggregate.
     */
    where?: ProductAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductAssets to fetch.
     */
    orderBy?: ProductAssetOrderByWithRelationInput | ProductAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductAssets
    **/
    _count?: true | ProductAssetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductAssetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductAssetMaxAggregateInputType
  }

  export type GetProductAssetAggregateType<T extends ProductAssetAggregateArgs> = {
        [P in keyof T & keyof AggregateProductAsset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductAsset[P]>
      : GetScalarType<T[P], AggregateProductAsset[P]>
  }




  export type ProductAssetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductAssetWhereInput
    orderBy?: ProductAssetOrderByWithAggregationInput | ProductAssetOrderByWithAggregationInput[]
    by: ProductAssetScalarFieldEnum[] | ProductAssetScalarFieldEnum
    having?: ProductAssetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductAssetCountAggregateInputType | true
    _min?: ProductAssetMinAggregateInputType
    _max?: ProductAssetMaxAggregateInputType
  }

  export type ProductAssetGroupByOutputType = {
    id: string
    productId: string
    name: string
    type: string
    fileUrl: string
    fileSize: string | null
    createdAt: Date
    _count: ProductAssetCountAggregateOutputType | null
    _min: ProductAssetMinAggregateOutputType | null
    _max: ProductAssetMaxAggregateOutputType | null
  }

  type GetProductAssetGroupByPayload<T extends ProductAssetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductAssetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductAssetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductAssetGroupByOutputType[P]>
            : GetScalarType<T[P], ProductAssetGroupByOutputType[P]>
        }
      >
    >


  export type ProductAssetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    name?: boolean
    type?: boolean
    fileUrl?: boolean
    fileSize?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productAsset"]>

  export type ProductAssetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    name?: boolean
    type?: boolean
    fileUrl?: boolean
    fileSize?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productAsset"]>

  export type ProductAssetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    name?: boolean
    type?: boolean
    fileUrl?: boolean
    fileSize?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productAsset"]>

  export type ProductAssetSelectScalar = {
    id?: boolean
    productId?: boolean
    name?: boolean
    type?: boolean
    fileUrl?: boolean
    fileSize?: boolean
    createdAt?: boolean
  }

  export type ProductAssetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "name" | "type" | "fileUrl" | "fileSize" | "createdAt", ExtArgs["result"]["productAsset"]>
  export type ProductAssetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductAssetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductAssetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductAssetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductAsset"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      name: string
      type: string
      fileUrl: string
      fileSize: string | null
      createdAt: Date
    }, ExtArgs["result"]["productAsset"]>
    composites: {}
  }

  type ProductAssetGetPayload<S extends boolean | null | undefined | ProductAssetDefaultArgs> = $Result.GetResult<Prisma.$ProductAssetPayload, S>

  type ProductAssetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductAssetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductAssetCountAggregateInputType | true
    }

  export interface ProductAssetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductAsset'], meta: { name: 'ProductAsset' } }
    /**
     * Find zero or one ProductAsset that matches the filter.
     * @param {ProductAssetFindUniqueArgs} args - Arguments to find a ProductAsset
     * @example
     * // Get one ProductAsset
     * const productAsset = await prisma.productAsset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductAssetFindUniqueArgs>(args: SelectSubset<T, ProductAssetFindUniqueArgs<ExtArgs>>): Prisma__ProductAssetClient<$Result.GetResult<Prisma.$ProductAssetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductAsset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductAssetFindUniqueOrThrowArgs} args - Arguments to find a ProductAsset
     * @example
     * // Get one ProductAsset
     * const productAsset = await prisma.productAsset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductAssetFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductAssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductAssetClient<$Result.GetResult<Prisma.$ProductAssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductAsset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAssetFindFirstArgs} args - Arguments to find a ProductAsset
     * @example
     * // Get one ProductAsset
     * const productAsset = await prisma.productAsset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductAssetFindFirstArgs>(args?: SelectSubset<T, ProductAssetFindFirstArgs<ExtArgs>>): Prisma__ProductAssetClient<$Result.GetResult<Prisma.$ProductAssetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductAsset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAssetFindFirstOrThrowArgs} args - Arguments to find a ProductAsset
     * @example
     * // Get one ProductAsset
     * const productAsset = await prisma.productAsset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductAssetFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductAssetFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductAssetClient<$Result.GetResult<Prisma.$ProductAssetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductAssets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAssetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductAssets
     * const productAssets = await prisma.productAsset.findMany()
     * 
     * // Get first 10 ProductAssets
     * const productAssets = await prisma.productAsset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productAssetWithIdOnly = await prisma.productAsset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductAssetFindManyArgs>(args?: SelectSubset<T, ProductAssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductAssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductAsset.
     * @param {ProductAssetCreateArgs} args - Arguments to create a ProductAsset.
     * @example
     * // Create one ProductAsset
     * const ProductAsset = await prisma.productAsset.create({
     *   data: {
     *     // ... data to create a ProductAsset
     *   }
     * })
     * 
     */
    create<T extends ProductAssetCreateArgs>(args: SelectSubset<T, ProductAssetCreateArgs<ExtArgs>>): Prisma__ProductAssetClient<$Result.GetResult<Prisma.$ProductAssetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductAssets.
     * @param {ProductAssetCreateManyArgs} args - Arguments to create many ProductAssets.
     * @example
     * // Create many ProductAssets
     * const productAsset = await prisma.productAsset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductAssetCreateManyArgs>(args?: SelectSubset<T, ProductAssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductAssets and returns the data saved in the database.
     * @param {ProductAssetCreateManyAndReturnArgs} args - Arguments to create many ProductAssets.
     * @example
     * // Create many ProductAssets
     * const productAsset = await prisma.productAsset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductAssets and only return the `id`
     * const productAssetWithIdOnly = await prisma.productAsset.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductAssetCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductAssetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductAssetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductAsset.
     * @param {ProductAssetDeleteArgs} args - Arguments to delete one ProductAsset.
     * @example
     * // Delete one ProductAsset
     * const ProductAsset = await prisma.productAsset.delete({
     *   where: {
     *     // ... filter to delete one ProductAsset
     *   }
     * })
     * 
     */
    delete<T extends ProductAssetDeleteArgs>(args: SelectSubset<T, ProductAssetDeleteArgs<ExtArgs>>): Prisma__ProductAssetClient<$Result.GetResult<Prisma.$ProductAssetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductAsset.
     * @param {ProductAssetUpdateArgs} args - Arguments to update one ProductAsset.
     * @example
     * // Update one ProductAsset
     * const productAsset = await prisma.productAsset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductAssetUpdateArgs>(args: SelectSubset<T, ProductAssetUpdateArgs<ExtArgs>>): Prisma__ProductAssetClient<$Result.GetResult<Prisma.$ProductAssetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductAssets.
     * @param {ProductAssetDeleteManyArgs} args - Arguments to filter ProductAssets to delete.
     * @example
     * // Delete a few ProductAssets
     * const { count } = await prisma.productAsset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductAssetDeleteManyArgs>(args?: SelectSubset<T, ProductAssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductAssets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAssetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductAssets
     * const productAsset = await prisma.productAsset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductAssetUpdateManyArgs>(args: SelectSubset<T, ProductAssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductAssets and returns the data updated in the database.
     * @param {ProductAssetUpdateManyAndReturnArgs} args - Arguments to update many ProductAssets.
     * @example
     * // Update many ProductAssets
     * const productAsset = await prisma.productAsset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductAssets and only return the `id`
     * const productAssetWithIdOnly = await prisma.productAsset.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductAssetUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductAssetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductAssetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductAsset.
     * @param {ProductAssetUpsertArgs} args - Arguments to update or create a ProductAsset.
     * @example
     * // Update or create a ProductAsset
     * const productAsset = await prisma.productAsset.upsert({
     *   create: {
     *     // ... data to create a ProductAsset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductAsset we want to update
     *   }
     * })
     */
    upsert<T extends ProductAssetUpsertArgs>(args: SelectSubset<T, ProductAssetUpsertArgs<ExtArgs>>): Prisma__ProductAssetClient<$Result.GetResult<Prisma.$ProductAssetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductAssets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAssetCountArgs} args - Arguments to filter ProductAssets to count.
     * @example
     * // Count the number of ProductAssets
     * const count = await prisma.productAsset.count({
     *   where: {
     *     // ... the filter for the ProductAssets we want to count
     *   }
     * })
    **/
    count<T extends ProductAssetCountArgs>(
      args?: Subset<T, ProductAssetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductAssetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductAsset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAssetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAssetAggregateArgs>(args: Subset<T, ProductAssetAggregateArgs>): Prisma.PrismaPromise<GetProductAssetAggregateType<T>>

    /**
     * Group by ProductAsset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAssetGroupByArgs} args - Group by arguments.
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
      T extends ProductAssetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductAssetGroupByArgs['orderBy'] }
        : { orderBy?: ProductAssetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductAssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductAsset model
   */
  readonly fields: ProductAssetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductAsset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductAssetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProductAsset model
   */
  interface ProductAssetFieldRefs {
    readonly id: FieldRef<"ProductAsset", 'String'>
    readonly productId: FieldRef<"ProductAsset", 'String'>
    readonly name: FieldRef<"ProductAsset", 'String'>
    readonly type: FieldRef<"ProductAsset", 'String'>
    readonly fileUrl: FieldRef<"ProductAsset", 'String'>
    readonly fileSize: FieldRef<"ProductAsset", 'String'>
    readonly createdAt: FieldRef<"ProductAsset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductAsset findUnique
   */
  export type ProductAssetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAsset
     */
    select?: ProductAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAsset
     */
    omit?: ProductAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAssetInclude<ExtArgs> | null
    /**
     * Filter, which ProductAsset to fetch.
     */
    where: ProductAssetWhereUniqueInput
  }

  /**
   * ProductAsset findUniqueOrThrow
   */
  export type ProductAssetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAsset
     */
    select?: ProductAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAsset
     */
    omit?: ProductAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAssetInclude<ExtArgs> | null
    /**
     * Filter, which ProductAsset to fetch.
     */
    where: ProductAssetWhereUniqueInput
  }

  /**
   * ProductAsset findFirst
   */
  export type ProductAssetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAsset
     */
    select?: ProductAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAsset
     */
    omit?: ProductAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAssetInclude<ExtArgs> | null
    /**
     * Filter, which ProductAsset to fetch.
     */
    where?: ProductAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductAssets to fetch.
     */
    orderBy?: ProductAssetOrderByWithRelationInput | ProductAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductAssets.
     */
    cursor?: ProductAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductAssets.
     */
    distinct?: ProductAssetScalarFieldEnum | ProductAssetScalarFieldEnum[]
  }

  /**
   * ProductAsset findFirstOrThrow
   */
  export type ProductAssetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAsset
     */
    select?: ProductAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAsset
     */
    omit?: ProductAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAssetInclude<ExtArgs> | null
    /**
     * Filter, which ProductAsset to fetch.
     */
    where?: ProductAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductAssets to fetch.
     */
    orderBy?: ProductAssetOrderByWithRelationInput | ProductAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductAssets.
     */
    cursor?: ProductAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductAssets.
     */
    distinct?: ProductAssetScalarFieldEnum | ProductAssetScalarFieldEnum[]
  }

  /**
   * ProductAsset findMany
   */
  export type ProductAssetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAsset
     */
    select?: ProductAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAsset
     */
    omit?: ProductAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAssetInclude<ExtArgs> | null
    /**
     * Filter, which ProductAssets to fetch.
     */
    where?: ProductAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductAssets to fetch.
     */
    orderBy?: ProductAssetOrderByWithRelationInput | ProductAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductAssets.
     */
    cursor?: ProductAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductAssets.
     */
    skip?: number
    distinct?: ProductAssetScalarFieldEnum | ProductAssetScalarFieldEnum[]
  }

  /**
   * ProductAsset create
   */
  export type ProductAssetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAsset
     */
    select?: ProductAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAsset
     */
    omit?: ProductAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAssetInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductAsset.
     */
    data: XOR<ProductAssetCreateInput, ProductAssetUncheckedCreateInput>
  }

  /**
   * ProductAsset createMany
   */
  export type ProductAssetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductAssets.
     */
    data: ProductAssetCreateManyInput | ProductAssetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductAsset createManyAndReturn
   */
  export type ProductAssetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAsset
     */
    select?: ProductAssetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAsset
     */
    omit?: ProductAssetOmit<ExtArgs> | null
    /**
     * The data used to create many ProductAssets.
     */
    data: ProductAssetCreateManyInput | ProductAssetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAssetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductAsset update
   */
  export type ProductAssetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAsset
     */
    select?: ProductAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAsset
     */
    omit?: ProductAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAssetInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductAsset.
     */
    data: XOR<ProductAssetUpdateInput, ProductAssetUncheckedUpdateInput>
    /**
     * Choose, which ProductAsset to update.
     */
    where: ProductAssetWhereUniqueInput
  }

  /**
   * ProductAsset updateMany
   */
  export type ProductAssetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductAssets.
     */
    data: XOR<ProductAssetUpdateManyMutationInput, ProductAssetUncheckedUpdateManyInput>
    /**
     * Filter which ProductAssets to update
     */
    where?: ProductAssetWhereInput
    /**
     * Limit how many ProductAssets to update.
     */
    limit?: number
  }

  /**
   * ProductAsset updateManyAndReturn
   */
  export type ProductAssetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAsset
     */
    select?: ProductAssetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAsset
     */
    omit?: ProductAssetOmit<ExtArgs> | null
    /**
     * The data used to update ProductAssets.
     */
    data: XOR<ProductAssetUpdateManyMutationInput, ProductAssetUncheckedUpdateManyInput>
    /**
     * Filter which ProductAssets to update
     */
    where?: ProductAssetWhereInput
    /**
     * Limit how many ProductAssets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAssetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductAsset upsert
   */
  export type ProductAssetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAsset
     */
    select?: ProductAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAsset
     */
    omit?: ProductAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAssetInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductAsset to update in case it exists.
     */
    where: ProductAssetWhereUniqueInput
    /**
     * In case the ProductAsset found by the `where` argument doesn't exist, create a new ProductAsset with this data.
     */
    create: XOR<ProductAssetCreateInput, ProductAssetUncheckedCreateInput>
    /**
     * In case the ProductAsset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductAssetUpdateInput, ProductAssetUncheckedUpdateInput>
  }

  /**
   * ProductAsset delete
   */
  export type ProductAssetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAsset
     */
    select?: ProductAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAsset
     */
    omit?: ProductAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAssetInclude<ExtArgs> | null
    /**
     * Filter which ProductAsset to delete.
     */
    where: ProductAssetWhereUniqueInput
  }

  /**
   * ProductAsset deleteMany
   */
  export type ProductAssetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductAssets to delete
     */
    where?: ProductAssetWhereInput
    /**
     * Limit how many ProductAssets to delete.
     */
    limit?: number
  }

  /**
   * ProductAsset without action
   */
  export type ProductAssetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAsset
     */
    select?: ProductAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAsset
     */
    omit?: ProductAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAssetInclude<ExtArgs> | null
  }


  /**
   * Model UserLicense
   */

  export type AggregateUserLicense = {
    _count: UserLicenseCountAggregateOutputType | null
    _min: UserLicenseMinAggregateOutputType | null
    _max: UserLicenseMaxAggregateOutputType | null
  }

  export type UserLicenseMinAggregateOutputType = {
    id: string | null
    userId: string | null
    productId: string | null
    licenseType: $Enums.LicenseType | null
    claimedAt: Date | null
  }

  export type UserLicenseMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    productId: string | null
    licenseType: $Enums.LicenseType | null
    claimedAt: Date | null
  }

  export type UserLicenseCountAggregateOutputType = {
    id: number
    userId: number
    productId: number
    licenseType: number
    claimedAt: number
    _all: number
  }


  export type UserLicenseMinAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    licenseType?: true
    claimedAt?: true
  }

  export type UserLicenseMaxAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    licenseType?: true
    claimedAt?: true
  }

  export type UserLicenseCountAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    licenseType?: true
    claimedAt?: true
    _all?: true
  }

  export type UserLicenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLicense to aggregate.
     */
    where?: UserLicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLicenses to fetch.
     */
    orderBy?: UserLicenseOrderByWithRelationInput | UserLicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserLicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLicenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLicenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserLicenses
    **/
    _count?: true | UserLicenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserLicenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserLicenseMaxAggregateInputType
  }

  export type GetUserLicenseAggregateType<T extends UserLicenseAggregateArgs> = {
        [P in keyof T & keyof AggregateUserLicense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserLicense[P]>
      : GetScalarType<T[P], AggregateUserLicense[P]>
  }




  export type UserLicenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLicenseWhereInput
    orderBy?: UserLicenseOrderByWithAggregationInput | UserLicenseOrderByWithAggregationInput[]
    by: UserLicenseScalarFieldEnum[] | UserLicenseScalarFieldEnum
    having?: UserLicenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserLicenseCountAggregateInputType | true
    _min?: UserLicenseMinAggregateInputType
    _max?: UserLicenseMaxAggregateInputType
  }

  export type UserLicenseGroupByOutputType = {
    id: string
    userId: string
    productId: string
    licenseType: $Enums.LicenseType
    claimedAt: Date
    _count: UserLicenseCountAggregateOutputType | null
    _min: UserLicenseMinAggregateOutputType | null
    _max: UserLicenseMaxAggregateOutputType | null
  }

  type GetUserLicenseGroupByPayload<T extends UserLicenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserLicenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserLicenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserLicenseGroupByOutputType[P]>
            : GetScalarType<T[P], UserLicenseGroupByOutputType[P]>
        }
      >
    >


  export type UserLicenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    licenseType?: boolean
    claimedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLicense"]>

  export type UserLicenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    licenseType?: boolean
    claimedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLicense"]>

  export type UserLicenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    licenseType?: boolean
    claimedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLicense"]>

  export type UserLicenseSelectScalar = {
    id?: boolean
    userId?: boolean
    productId?: boolean
    licenseType?: boolean
    claimedAt?: boolean
  }

  export type UserLicenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "productId" | "licenseType" | "claimedAt", ExtArgs["result"]["userLicense"]>
  export type UserLicenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type UserLicenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type UserLicenseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $UserLicensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserLicense"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      productId: string
      licenseType: $Enums.LicenseType
      claimedAt: Date
    }, ExtArgs["result"]["userLicense"]>
    composites: {}
  }

  type UserLicenseGetPayload<S extends boolean | null | undefined | UserLicenseDefaultArgs> = $Result.GetResult<Prisma.$UserLicensePayload, S>

  type UserLicenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserLicenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserLicenseCountAggregateInputType | true
    }

  export interface UserLicenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserLicense'], meta: { name: 'UserLicense' } }
    /**
     * Find zero or one UserLicense that matches the filter.
     * @param {UserLicenseFindUniqueArgs} args - Arguments to find a UserLicense
     * @example
     * // Get one UserLicense
     * const userLicense = await prisma.userLicense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserLicenseFindUniqueArgs>(args: SelectSubset<T, UserLicenseFindUniqueArgs<ExtArgs>>): Prisma__UserLicenseClient<$Result.GetResult<Prisma.$UserLicensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserLicense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserLicenseFindUniqueOrThrowArgs} args - Arguments to find a UserLicense
     * @example
     * // Get one UserLicense
     * const userLicense = await prisma.userLicense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserLicenseFindUniqueOrThrowArgs>(args: SelectSubset<T, UserLicenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserLicenseClient<$Result.GetResult<Prisma.$UserLicensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLicense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLicenseFindFirstArgs} args - Arguments to find a UserLicense
     * @example
     * // Get one UserLicense
     * const userLicense = await prisma.userLicense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserLicenseFindFirstArgs>(args?: SelectSubset<T, UserLicenseFindFirstArgs<ExtArgs>>): Prisma__UserLicenseClient<$Result.GetResult<Prisma.$UserLicensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLicense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLicenseFindFirstOrThrowArgs} args - Arguments to find a UserLicense
     * @example
     * // Get one UserLicense
     * const userLicense = await prisma.userLicense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserLicenseFindFirstOrThrowArgs>(args?: SelectSubset<T, UserLicenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserLicenseClient<$Result.GetResult<Prisma.$UserLicensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserLicenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLicenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserLicenses
     * const userLicenses = await prisma.userLicense.findMany()
     * 
     * // Get first 10 UserLicenses
     * const userLicenses = await prisma.userLicense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userLicenseWithIdOnly = await prisma.userLicense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserLicenseFindManyArgs>(args?: SelectSubset<T, UserLicenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLicensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserLicense.
     * @param {UserLicenseCreateArgs} args - Arguments to create a UserLicense.
     * @example
     * // Create one UserLicense
     * const UserLicense = await prisma.userLicense.create({
     *   data: {
     *     // ... data to create a UserLicense
     *   }
     * })
     * 
     */
    create<T extends UserLicenseCreateArgs>(args: SelectSubset<T, UserLicenseCreateArgs<ExtArgs>>): Prisma__UserLicenseClient<$Result.GetResult<Prisma.$UserLicensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserLicenses.
     * @param {UserLicenseCreateManyArgs} args - Arguments to create many UserLicenses.
     * @example
     * // Create many UserLicenses
     * const userLicense = await prisma.userLicense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserLicenseCreateManyArgs>(args?: SelectSubset<T, UserLicenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserLicenses and returns the data saved in the database.
     * @param {UserLicenseCreateManyAndReturnArgs} args - Arguments to create many UserLicenses.
     * @example
     * // Create many UserLicenses
     * const userLicense = await prisma.userLicense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserLicenses and only return the `id`
     * const userLicenseWithIdOnly = await prisma.userLicense.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserLicenseCreateManyAndReturnArgs>(args?: SelectSubset<T, UserLicenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLicensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserLicense.
     * @param {UserLicenseDeleteArgs} args - Arguments to delete one UserLicense.
     * @example
     * // Delete one UserLicense
     * const UserLicense = await prisma.userLicense.delete({
     *   where: {
     *     // ... filter to delete one UserLicense
     *   }
     * })
     * 
     */
    delete<T extends UserLicenseDeleteArgs>(args: SelectSubset<T, UserLicenseDeleteArgs<ExtArgs>>): Prisma__UserLicenseClient<$Result.GetResult<Prisma.$UserLicensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserLicense.
     * @param {UserLicenseUpdateArgs} args - Arguments to update one UserLicense.
     * @example
     * // Update one UserLicense
     * const userLicense = await prisma.userLicense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserLicenseUpdateArgs>(args: SelectSubset<T, UserLicenseUpdateArgs<ExtArgs>>): Prisma__UserLicenseClient<$Result.GetResult<Prisma.$UserLicensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserLicenses.
     * @param {UserLicenseDeleteManyArgs} args - Arguments to filter UserLicenses to delete.
     * @example
     * // Delete a few UserLicenses
     * const { count } = await prisma.userLicense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserLicenseDeleteManyArgs>(args?: SelectSubset<T, UserLicenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLicenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLicenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserLicenses
     * const userLicense = await prisma.userLicense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserLicenseUpdateManyArgs>(args: SelectSubset<T, UserLicenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLicenses and returns the data updated in the database.
     * @param {UserLicenseUpdateManyAndReturnArgs} args - Arguments to update many UserLicenses.
     * @example
     * // Update many UserLicenses
     * const userLicense = await prisma.userLicense.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserLicenses and only return the `id`
     * const userLicenseWithIdOnly = await prisma.userLicense.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserLicenseUpdateManyAndReturnArgs>(args: SelectSubset<T, UserLicenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLicensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserLicense.
     * @param {UserLicenseUpsertArgs} args - Arguments to update or create a UserLicense.
     * @example
     * // Update or create a UserLicense
     * const userLicense = await prisma.userLicense.upsert({
     *   create: {
     *     // ... data to create a UserLicense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserLicense we want to update
     *   }
     * })
     */
    upsert<T extends UserLicenseUpsertArgs>(args: SelectSubset<T, UserLicenseUpsertArgs<ExtArgs>>): Prisma__UserLicenseClient<$Result.GetResult<Prisma.$UserLicensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserLicenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLicenseCountArgs} args - Arguments to filter UserLicenses to count.
     * @example
     * // Count the number of UserLicenses
     * const count = await prisma.userLicense.count({
     *   where: {
     *     // ... the filter for the UserLicenses we want to count
     *   }
     * })
    **/
    count<T extends UserLicenseCountArgs>(
      args?: Subset<T, UserLicenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserLicenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserLicense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLicenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserLicenseAggregateArgs>(args: Subset<T, UserLicenseAggregateArgs>): Prisma.PrismaPromise<GetUserLicenseAggregateType<T>>

    /**
     * Group by UserLicense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLicenseGroupByArgs} args - Group by arguments.
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
      T extends UserLicenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserLicenseGroupByArgs['orderBy'] }
        : { orderBy?: UserLicenseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserLicenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserLicenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserLicense model
   */
  readonly fields: UserLicenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserLicense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserLicenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserLicense model
   */
  interface UserLicenseFieldRefs {
    readonly id: FieldRef<"UserLicense", 'String'>
    readonly userId: FieldRef<"UserLicense", 'String'>
    readonly productId: FieldRef<"UserLicense", 'String'>
    readonly licenseType: FieldRef<"UserLicense", 'LicenseType'>
    readonly claimedAt: FieldRef<"UserLicense", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserLicense findUnique
   */
  export type UserLicenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLicense
     */
    select?: UserLicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLicense
     */
    omit?: UserLicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLicenseInclude<ExtArgs> | null
    /**
     * Filter, which UserLicense to fetch.
     */
    where: UserLicenseWhereUniqueInput
  }

  /**
   * UserLicense findUniqueOrThrow
   */
  export type UserLicenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLicense
     */
    select?: UserLicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLicense
     */
    omit?: UserLicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLicenseInclude<ExtArgs> | null
    /**
     * Filter, which UserLicense to fetch.
     */
    where: UserLicenseWhereUniqueInput
  }

  /**
   * UserLicense findFirst
   */
  export type UserLicenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLicense
     */
    select?: UserLicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLicense
     */
    omit?: UserLicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLicenseInclude<ExtArgs> | null
    /**
     * Filter, which UserLicense to fetch.
     */
    where?: UserLicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLicenses to fetch.
     */
    orderBy?: UserLicenseOrderByWithRelationInput | UserLicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLicenses.
     */
    cursor?: UserLicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLicenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLicenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLicenses.
     */
    distinct?: UserLicenseScalarFieldEnum | UserLicenseScalarFieldEnum[]
  }

  /**
   * UserLicense findFirstOrThrow
   */
  export type UserLicenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLicense
     */
    select?: UserLicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLicense
     */
    omit?: UserLicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLicenseInclude<ExtArgs> | null
    /**
     * Filter, which UserLicense to fetch.
     */
    where?: UserLicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLicenses to fetch.
     */
    orderBy?: UserLicenseOrderByWithRelationInput | UserLicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLicenses.
     */
    cursor?: UserLicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLicenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLicenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLicenses.
     */
    distinct?: UserLicenseScalarFieldEnum | UserLicenseScalarFieldEnum[]
  }

  /**
   * UserLicense findMany
   */
  export type UserLicenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLicense
     */
    select?: UserLicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLicense
     */
    omit?: UserLicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLicenseInclude<ExtArgs> | null
    /**
     * Filter, which UserLicenses to fetch.
     */
    where?: UserLicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLicenses to fetch.
     */
    orderBy?: UserLicenseOrderByWithRelationInput | UserLicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserLicenses.
     */
    cursor?: UserLicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLicenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLicenses.
     */
    skip?: number
    distinct?: UserLicenseScalarFieldEnum | UserLicenseScalarFieldEnum[]
  }

  /**
   * UserLicense create
   */
  export type UserLicenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLicense
     */
    select?: UserLicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLicense
     */
    omit?: UserLicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLicenseInclude<ExtArgs> | null
    /**
     * The data needed to create a UserLicense.
     */
    data: XOR<UserLicenseCreateInput, UserLicenseUncheckedCreateInput>
  }

  /**
   * UserLicense createMany
   */
  export type UserLicenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserLicenses.
     */
    data: UserLicenseCreateManyInput | UserLicenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserLicense createManyAndReturn
   */
  export type UserLicenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLicense
     */
    select?: UserLicenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserLicense
     */
    omit?: UserLicenseOmit<ExtArgs> | null
    /**
     * The data used to create many UserLicenses.
     */
    data: UserLicenseCreateManyInput | UserLicenseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLicenseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserLicense update
   */
  export type UserLicenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLicense
     */
    select?: UserLicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLicense
     */
    omit?: UserLicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLicenseInclude<ExtArgs> | null
    /**
     * The data needed to update a UserLicense.
     */
    data: XOR<UserLicenseUpdateInput, UserLicenseUncheckedUpdateInput>
    /**
     * Choose, which UserLicense to update.
     */
    where: UserLicenseWhereUniqueInput
  }

  /**
   * UserLicense updateMany
   */
  export type UserLicenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserLicenses.
     */
    data: XOR<UserLicenseUpdateManyMutationInput, UserLicenseUncheckedUpdateManyInput>
    /**
     * Filter which UserLicenses to update
     */
    where?: UserLicenseWhereInput
    /**
     * Limit how many UserLicenses to update.
     */
    limit?: number
  }

  /**
   * UserLicense updateManyAndReturn
   */
  export type UserLicenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLicense
     */
    select?: UserLicenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserLicense
     */
    omit?: UserLicenseOmit<ExtArgs> | null
    /**
     * The data used to update UserLicenses.
     */
    data: XOR<UserLicenseUpdateManyMutationInput, UserLicenseUncheckedUpdateManyInput>
    /**
     * Filter which UserLicenses to update
     */
    where?: UserLicenseWhereInput
    /**
     * Limit how many UserLicenses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLicenseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserLicense upsert
   */
  export type UserLicenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLicense
     */
    select?: UserLicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLicense
     */
    omit?: UserLicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLicenseInclude<ExtArgs> | null
    /**
     * The filter to search for the UserLicense to update in case it exists.
     */
    where: UserLicenseWhereUniqueInput
    /**
     * In case the UserLicense found by the `where` argument doesn't exist, create a new UserLicense with this data.
     */
    create: XOR<UserLicenseCreateInput, UserLicenseUncheckedCreateInput>
    /**
     * In case the UserLicense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserLicenseUpdateInput, UserLicenseUncheckedUpdateInput>
  }

  /**
   * UserLicense delete
   */
  export type UserLicenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLicense
     */
    select?: UserLicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLicense
     */
    omit?: UserLicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLicenseInclude<ExtArgs> | null
    /**
     * Filter which UserLicense to delete.
     */
    where: UserLicenseWhereUniqueInput
  }

  /**
   * UserLicense deleteMany
   */
  export type UserLicenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLicenses to delete
     */
    where?: UserLicenseWhereInput
    /**
     * Limit how many UserLicenses to delete.
     */
    limit?: number
  }

  /**
   * UserLicense without action
   */
  export type UserLicenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLicense
     */
    select?: UserLicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLicense
     */
    omit?: UserLicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLicenseInclude<ExtArgs> | null
  }


  /**
   * Model Integration
   */

  export type AggregateIntegration = {
    _count: IntegrationCountAggregateOutputType | null
    _min: IntegrationMinAggregateOutputType | null
    _max: IntegrationMaxAggregateOutputType | null
  }

  export type IntegrationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    provider: string | null
    accessToken: string | null
    refreshToken: string | null
    metadata: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IntegrationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    provider: string | null
    accessToken: string | null
    refreshToken: string | null
    metadata: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IntegrationCountAggregateOutputType = {
    id: number
    userId: number
    provider: number
    accessToken: number
    refreshToken: number
    metadata: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IntegrationMinAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    accessToken?: true
    refreshToken?: true
    metadata?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IntegrationMaxAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    accessToken?: true
    refreshToken?: true
    metadata?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IntegrationCountAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    accessToken?: true
    refreshToken?: true
    metadata?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IntegrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Integration to aggregate.
     */
    where?: IntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Integrations to fetch.
     */
    orderBy?: IntegrationOrderByWithRelationInput | IntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Integrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Integrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Integrations
    **/
    _count?: true | IntegrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IntegrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IntegrationMaxAggregateInputType
  }

  export type GetIntegrationAggregateType<T extends IntegrationAggregateArgs> = {
        [P in keyof T & keyof AggregateIntegration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIntegration[P]>
      : GetScalarType<T[P], AggregateIntegration[P]>
  }




  export type IntegrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntegrationWhereInput
    orderBy?: IntegrationOrderByWithAggregationInput | IntegrationOrderByWithAggregationInput[]
    by: IntegrationScalarFieldEnum[] | IntegrationScalarFieldEnum
    having?: IntegrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IntegrationCountAggregateInputType | true
    _min?: IntegrationMinAggregateInputType
    _max?: IntegrationMaxAggregateInputType
  }

  export type IntegrationGroupByOutputType = {
    id: string
    userId: string
    provider: string
    accessToken: string
    refreshToken: string | null
    metadata: string | null
    expiresAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: IntegrationCountAggregateOutputType | null
    _min: IntegrationMinAggregateOutputType | null
    _max: IntegrationMaxAggregateOutputType | null
  }

  type GetIntegrationGroupByPayload<T extends IntegrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IntegrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IntegrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IntegrationGroupByOutputType[P]>
            : GetScalarType<T[P], IntegrationGroupByOutputType[P]>
        }
      >
    >


  export type IntegrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    metadata?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["integration"]>

  export type IntegrationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    metadata?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["integration"]>

  export type IntegrationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    metadata?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["integration"]>

  export type IntegrationSelectScalar = {
    id?: boolean
    userId?: boolean
    provider?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    metadata?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IntegrationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "provider" | "accessToken" | "refreshToken" | "metadata" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["integration"]>
  export type IntegrationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IntegrationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IntegrationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $IntegrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Integration"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      provider: string
      accessToken: string
      refreshToken: string | null
      metadata: string | null
      expiresAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["integration"]>
    composites: {}
  }

  type IntegrationGetPayload<S extends boolean | null | undefined | IntegrationDefaultArgs> = $Result.GetResult<Prisma.$IntegrationPayload, S>

  type IntegrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IntegrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IntegrationCountAggregateInputType | true
    }

  export interface IntegrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Integration'], meta: { name: 'Integration' } }
    /**
     * Find zero or one Integration that matches the filter.
     * @param {IntegrationFindUniqueArgs} args - Arguments to find a Integration
     * @example
     * // Get one Integration
     * const integration = await prisma.integration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IntegrationFindUniqueArgs>(args: SelectSubset<T, IntegrationFindUniqueArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Integration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IntegrationFindUniqueOrThrowArgs} args - Arguments to find a Integration
     * @example
     * // Get one Integration
     * const integration = await prisma.integration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IntegrationFindUniqueOrThrowArgs>(args: SelectSubset<T, IntegrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Integration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationFindFirstArgs} args - Arguments to find a Integration
     * @example
     * // Get one Integration
     * const integration = await prisma.integration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IntegrationFindFirstArgs>(args?: SelectSubset<T, IntegrationFindFirstArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Integration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationFindFirstOrThrowArgs} args - Arguments to find a Integration
     * @example
     * // Get one Integration
     * const integration = await prisma.integration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IntegrationFindFirstOrThrowArgs>(args?: SelectSubset<T, IntegrationFindFirstOrThrowArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Integrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Integrations
     * const integrations = await prisma.integration.findMany()
     * 
     * // Get first 10 Integrations
     * const integrations = await prisma.integration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const integrationWithIdOnly = await prisma.integration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IntegrationFindManyArgs>(args?: SelectSubset<T, IntegrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Integration.
     * @param {IntegrationCreateArgs} args - Arguments to create a Integration.
     * @example
     * // Create one Integration
     * const Integration = await prisma.integration.create({
     *   data: {
     *     // ... data to create a Integration
     *   }
     * })
     * 
     */
    create<T extends IntegrationCreateArgs>(args: SelectSubset<T, IntegrationCreateArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Integrations.
     * @param {IntegrationCreateManyArgs} args - Arguments to create many Integrations.
     * @example
     * // Create many Integrations
     * const integration = await prisma.integration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IntegrationCreateManyArgs>(args?: SelectSubset<T, IntegrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Integrations and returns the data saved in the database.
     * @param {IntegrationCreateManyAndReturnArgs} args - Arguments to create many Integrations.
     * @example
     * // Create many Integrations
     * const integration = await prisma.integration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Integrations and only return the `id`
     * const integrationWithIdOnly = await prisma.integration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IntegrationCreateManyAndReturnArgs>(args?: SelectSubset<T, IntegrationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Integration.
     * @param {IntegrationDeleteArgs} args - Arguments to delete one Integration.
     * @example
     * // Delete one Integration
     * const Integration = await prisma.integration.delete({
     *   where: {
     *     // ... filter to delete one Integration
     *   }
     * })
     * 
     */
    delete<T extends IntegrationDeleteArgs>(args: SelectSubset<T, IntegrationDeleteArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Integration.
     * @param {IntegrationUpdateArgs} args - Arguments to update one Integration.
     * @example
     * // Update one Integration
     * const integration = await prisma.integration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IntegrationUpdateArgs>(args: SelectSubset<T, IntegrationUpdateArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Integrations.
     * @param {IntegrationDeleteManyArgs} args - Arguments to filter Integrations to delete.
     * @example
     * // Delete a few Integrations
     * const { count } = await prisma.integration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IntegrationDeleteManyArgs>(args?: SelectSubset<T, IntegrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Integrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Integrations
     * const integration = await prisma.integration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IntegrationUpdateManyArgs>(args: SelectSubset<T, IntegrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Integrations and returns the data updated in the database.
     * @param {IntegrationUpdateManyAndReturnArgs} args - Arguments to update many Integrations.
     * @example
     * // Update many Integrations
     * const integration = await prisma.integration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Integrations and only return the `id`
     * const integrationWithIdOnly = await prisma.integration.updateManyAndReturn({
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
    updateManyAndReturn<T extends IntegrationUpdateManyAndReturnArgs>(args: SelectSubset<T, IntegrationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Integration.
     * @param {IntegrationUpsertArgs} args - Arguments to update or create a Integration.
     * @example
     * // Update or create a Integration
     * const integration = await prisma.integration.upsert({
     *   create: {
     *     // ... data to create a Integration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Integration we want to update
     *   }
     * })
     */
    upsert<T extends IntegrationUpsertArgs>(args: SelectSubset<T, IntegrationUpsertArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Integrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationCountArgs} args - Arguments to filter Integrations to count.
     * @example
     * // Count the number of Integrations
     * const count = await prisma.integration.count({
     *   where: {
     *     // ... the filter for the Integrations we want to count
     *   }
     * })
    **/
    count<T extends IntegrationCountArgs>(
      args?: Subset<T, IntegrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IntegrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Integration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IntegrationAggregateArgs>(args: Subset<T, IntegrationAggregateArgs>): Prisma.PrismaPromise<GetIntegrationAggregateType<T>>

    /**
     * Group by Integration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationGroupByArgs} args - Group by arguments.
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
      T extends IntegrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IntegrationGroupByArgs['orderBy'] }
        : { orderBy?: IntegrationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IntegrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntegrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Integration model
   */
  readonly fields: IntegrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Integration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IntegrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Integration model
   */
  interface IntegrationFieldRefs {
    readonly id: FieldRef<"Integration", 'String'>
    readonly userId: FieldRef<"Integration", 'String'>
    readonly provider: FieldRef<"Integration", 'String'>
    readonly accessToken: FieldRef<"Integration", 'String'>
    readonly refreshToken: FieldRef<"Integration", 'String'>
    readonly metadata: FieldRef<"Integration", 'String'>
    readonly expiresAt: FieldRef<"Integration", 'DateTime'>
    readonly createdAt: FieldRef<"Integration", 'DateTime'>
    readonly updatedAt: FieldRef<"Integration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Integration findUnique
   */
  export type IntegrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * Filter, which Integration to fetch.
     */
    where: IntegrationWhereUniqueInput
  }

  /**
   * Integration findUniqueOrThrow
   */
  export type IntegrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * Filter, which Integration to fetch.
     */
    where: IntegrationWhereUniqueInput
  }

  /**
   * Integration findFirst
   */
  export type IntegrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * Filter, which Integration to fetch.
     */
    where?: IntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Integrations to fetch.
     */
    orderBy?: IntegrationOrderByWithRelationInput | IntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Integrations.
     */
    cursor?: IntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Integrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Integrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Integrations.
     */
    distinct?: IntegrationScalarFieldEnum | IntegrationScalarFieldEnum[]
  }

  /**
   * Integration findFirstOrThrow
   */
  export type IntegrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * Filter, which Integration to fetch.
     */
    where?: IntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Integrations to fetch.
     */
    orderBy?: IntegrationOrderByWithRelationInput | IntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Integrations.
     */
    cursor?: IntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Integrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Integrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Integrations.
     */
    distinct?: IntegrationScalarFieldEnum | IntegrationScalarFieldEnum[]
  }

  /**
   * Integration findMany
   */
  export type IntegrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * Filter, which Integrations to fetch.
     */
    where?: IntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Integrations to fetch.
     */
    orderBy?: IntegrationOrderByWithRelationInput | IntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Integrations.
     */
    cursor?: IntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Integrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Integrations.
     */
    skip?: number
    distinct?: IntegrationScalarFieldEnum | IntegrationScalarFieldEnum[]
  }

  /**
   * Integration create
   */
  export type IntegrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * The data needed to create a Integration.
     */
    data: XOR<IntegrationCreateInput, IntegrationUncheckedCreateInput>
  }

  /**
   * Integration createMany
   */
  export type IntegrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Integrations.
     */
    data: IntegrationCreateManyInput | IntegrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Integration createManyAndReturn
   */
  export type IntegrationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * The data used to create many Integrations.
     */
    data: IntegrationCreateManyInput | IntegrationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Integration update
   */
  export type IntegrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * The data needed to update a Integration.
     */
    data: XOR<IntegrationUpdateInput, IntegrationUncheckedUpdateInput>
    /**
     * Choose, which Integration to update.
     */
    where: IntegrationWhereUniqueInput
  }

  /**
   * Integration updateMany
   */
  export type IntegrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Integrations.
     */
    data: XOR<IntegrationUpdateManyMutationInput, IntegrationUncheckedUpdateManyInput>
    /**
     * Filter which Integrations to update
     */
    where?: IntegrationWhereInput
    /**
     * Limit how many Integrations to update.
     */
    limit?: number
  }

  /**
   * Integration updateManyAndReturn
   */
  export type IntegrationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * The data used to update Integrations.
     */
    data: XOR<IntegrationUpdateManyMutationInput, IntegrationUncheckedUpdateManyInput>
    /**
     * Filter which Integrations to update
     */
    where?: IntegrationWhereInput
    /**
     * Limit how many Integrations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Integration upsert
   */
  export type IntegrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * The filter to search for the Integration to update in case it exists.
     */
    where: IntegrationWhereUniqueInput
    /**
     * In case the Integration found by the `where` argument doesn't exist, create a new Integration with this data.
     */
    create: XOR<IntegrationCreateInput, IntegrationUncheckedCreateInput>
    /**
     * In case the Integration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IntegrationUpdateInput, IntegrationUncheckedUpdateInput>
  }

  /**
   * Integration delete
   */
  export type IntegrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * Filter which Integration to delete.
     */
    where: IntegrationWhereUniqueInput
  }

  /**
   * Integration deleteMany
   */
  export type IntegrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Integrations to delete
     */
    where?: IntegrationWhereInput
    /**
     * Limit how many Integrations to delete.
     */
    limit?: number
  }

  /**
   * Integration without action
   */
  export type IntegrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integration
     */
    omit?: IntegrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
  }


  /**
   * Model GeneratedContent
   */

  export type AggregateGeneratedContent = {
    _count: GeneratedContentCountAggregateOutputType | null
    _min: GeneratedContentMinAggregateOutputType | null
    _max: GeneratedContentMaxAggregateOutputType | null
  }

  export type GeneratedContentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    productName: string | null
    contentType: string | null
    tone: string | null
    platform: string | null
    content: string | null
    createdAt: Date | null
  }

  export type GeneratedContentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    productName: string | null
    contentType: string | null
    tone: string | null
    platform: string | null
    content: string | null
    createdAt: Date | null
  }

  export type GeneratedContentCountAggregateOutputType = {
    id: number
    userId: number
    productName: number
    contentType: number
    tone: number
    platform: number
    content: number
    createdAt: number
    _all: number
  }


  export type GeneratedContentMinAggregateInputType = {
    id?: true
    userId?: true
    productName?: true
    contentType?: true
    tone?: true
    platform?: true
    content?: true
    createdAt?: true
  }

  export type GeneratedContentMaxAggregateInputType = {
    id?: true
    userId?: true
    productName?: true
    contentType?: true
    tone?: true
    platform?: true
    content?: true
    createdAt?: true
  }

  export type GeneratedContentCountAggregateInputType = {
    id?: true
    userId?: true
    productName?: true
    contentType?: true
    tone?: true
    platform?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type GeneratedContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneratedContent to aggregate.
     */
    where?: GeneratedContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedContents to fetch.
     */
    orderBy?: GeneratedContentOrderByWithRelationInput | GeneratedContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GeneratedContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GeneratedContents
    **/
    _count?: true | GeneratedContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeneratedContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeneratedContentMaxAggregateInputType
  }

  export type GetGeneratedContentAggregateType<T extends GeneratedContentAggregateArgs> = {
        [P in keyof T & keyof AggregateGeneratedContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeneratedContent[P]>
      : GetScalarType<T[P], AggregateGeneratedContent[P]>
  }




  export type GeneratedContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneratedContentWhereInput
    orderBy?: GeneratedContentOrderByWithAggregationInput | GeneratedContentOrderByWithAggregationInput[]
    by: GeneratedContentScalarFieldEnum[] | GeneratedContentScalarFieldEnum
    having?: GeneratedContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeneratedContentCountAggregateInputType | true
    _min?: GeneratedContentMinAggregateInputType
    _max?: GeneratedContentMaxAggregateInputType
  }

  export type GeneratedContentGroupByOutputType = {
    id: string
    userId: string
    productName: string
    contentType: string
    tone: string
    platform: string | null
    content: string
    createdAt: Date
    _count: GeneratedContentCountAggregateOutputType | null
    _min: GeneratedContentMinAggregateOutputType | null
    _max: GeneratedContentMaxAggregateOutputType | null
  }

  type GetGeneratedContentGroupByPayload<T extends GeneratedContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GeneratedContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeneratedContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeneratedContentGroupByOutputType[P]>
            : GetScalarType<T[P], GeneratedContentGroupByOutputType[P]>
        }
      >
    >


  export type GeneratedContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productName?: boolean
    contentType?: boolean
    tone?: boolean
    platform?: boolean
    content?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["generatedContent"]>

  export type GeneratedContentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productName?: boolean
    contentType?: boolean
    tone?: boolean
    platform?: boolean
    content?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["generatedContent"]>

  export type GeneratedContentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productName?: boolean
    contentType?: boolean
    tone?: boolean
    platform?: boolean
    content?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["generatedContent"]>

  export type GeneratedContentSelectScalar = {
    id?: boolean
    userId?: boolean
    productName?: boolean
    contentType?: boolean
    tone?: boolean
    platform?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type GeneratedContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "productName" | "contentType" | "tone" | "platform" | "content" | "createdAt", ExtArgs["result"]["generatedContent"]>
  export type GeneratedContentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GeneratedContentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GeneratedContentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GeneratedContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GeneratedContent"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      productName: string
      contentType: string
      tone: string
      platform: string | null
      content: string
      createdAt: Date
    }, ExtArgs["result"]["generatedContent"]>
    composites: {}
  }

  type GeneratedContentGetPayload<S extends boolean | null | undefined | GeneratedContentDefaultArgs> = $Result.GetResult<Prisma.$GeneratedContentPayload, S>

  type GeneratedContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GeneratedContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GeneratedContentCountAggregateInputType | true
    }

  export interface GeneratedContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GeneratedContent'], meta: { name: 'GeneratedContent' } }
    /**
     * Find zero or one GeneratedContent that matches the filter.
     * @param {GeneratedContentFindUniqueArgs} args - Arguments to find a GeneratedContent
     * @example
     * // Get one GeneratedContent
     * const generatedContent = await prisma.generatedContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GeneratedContentFindUniqueArgs>(args: SelectSubset<T, GeneratedContentFindUniqueArgs<ExtArgs>>): Prisma__GeneratedContentClient<$Result.GetResult<Prisma.$GeneratedContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GeneratedContent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GeneratedContentFindUniqueOrThrowArgs} args - Arguments to find a GeneratedContent
     * @example
     * // Get one GeneratedContent
     * const generatedContent = await prisma.generatedContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GeneratedContentFindUniqueOrThrowArgs>(args: SelectSubset<T, GeneratedContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GeneratedContentClient<$Result.GetResult<Prisma.$GeneratedContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeneratedContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedContentFindFirstArgs} args - Arguments to find a GeneratedContent
     * @example
     * // Get one GeneratedContent
     * const generatedContent = await prisma.generatedContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GeneratedContentFindFirstArgs>(args?: SelectSubset<T, GeneratedContentFindFirstArgs<ExtArgs>>): Prisma__GeneratedContentClient<$Result.GetResult<Prisma.$GeneratedContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeneratedContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedContentFindFirstOrThrowArgs} args - Arguments to find a GeneratedContent
     * @example
     * // Get one GeneratedContent
     * const generatedContent = await prisma.generatedContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GeneratedContentFindFirstOrThrowArgs>(args?: SelectSubset<T, GeneratedContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__GeneratedContentClient<$Result.GetResult<Prisma.$GeneratedContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GeneratedContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GeneratedContents
     * const generatedContents = await prisma.generatedContent.findMany()
     * 
     * // Get first 10 GeneratedContents
     * const generatedContents = await prisma.generatedContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generatedContentWithIdOnly = await prisma.generatedContent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GeneratedContentFindManyArgs>(args?: SelectSubset<T, GeneratedContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GeneratedContent.
     * @param {GeneratedContentCreateArgs} args - Arguments to create a GeneratedContent.
     * @example
     * // Create one GeneratedContent
     * const GeneratedContent = await prisma.generatedContent.create({
     *   data: {
     *     // ... data to create a GeneratedContent
     *   }
     * })
     * 
     */
    create<T extends GeneratedContentCreateArgs>(args: SelectSubset<T, GeneratedContentCreateArgs<ExtArgs>>): Prisma__GeneratedContentClient<$Result.GetResult<Prisma.$GeneratedContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GeneratedContents.
     * @param {GeneratedContentCreateManyArgs} args - Arguments to create many GeneratedContents.
     * @example
     * // Create many GeneratedContents
     * const generatedContent = await prisma.generatedContent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GeneratedContentCreateManyArgs>(args?: SelectSubset<T, GeneratedContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GeneratedContents and returns the data saved in the database.
     * @param {GeneratedContentCreateManyAndReturnArgs} args - Arguments to create many GeneratedContents.
     * @example
     * // Create many GeneratedContents
     * const generatedContent = await prisma.generatedContent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GeneratedContents and only return the `id`
     * const generatedContentWithIdOnly = await prisma.generatedContent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GeneratedContentCreateManyAndReturnArgs>(args?: SelectSubset<T, GeneratedContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedContentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GeneratedContent.
     * @param {GeneratedContentDeleteArgs} args - Arguments to delete one GeneratedContent.
     * @example
     * // Delete one GeneratedContent
     * const GeneratedContent = await prisma.generatedContent.delete({
     *   where: {
     *     // ... filter to delete one GeneratedContent
     *   }
     * })
     * 
     */
    delete<T extends GeneratedContentDeleteArgs>(args: SelectSubset<T, GeneratedContentDeleteArgs<ExtArgs>>): Prisma__GeneratedContentClient<$Result.GetResult<Prisma.$GeneratedContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GeneratedContent.
     * @param {GeneratedContentUpdateArgs} args - Arguments to update one GeneratedContent.
     * @example
     * // Update one GeneratedContent
     * const generatedContent = await prisma.generatedContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GeneratedContentUpdateArgs>(args: SelectSubset<T, GeneratedContentUpdateArgs<ExtArgs>>): Prisma__GeneratedContentClient<$Result.GetResult<Prisma.$GeneratedContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GeneratedContents.
     * @param {GeneratedContentDeleteManyArgs} args - Arguments to filter GeneratedContents to delete.
     * @example
     * // Delete a few GeneratedContents
     * const { count } = await prisma.generatedContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GeneratedContentDeleteManyArgs>(args?: SelectSubset<T, GeneratedContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeneratedContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GeneratedContents
     * const generatedContent = await prisma.generatedContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GeneratedContentUpdateManyArgs>(args: SelectSubset<T, GeneratedContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeneratedContents and returns the data updated in the database.
     * @param {GeneratedContentUpdateManyAndReturnArgs} args - Arguments to update many GeneratedContents.
     * @example
     * // Update many GeneratedContents
     * const generatedContent = await prisma.generatedContent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GeneratedContents and only return the `id`
     * const generatedContentWithIdOnly = await prisma.generatedContent.updateManyAndReturn({
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
    updateManyAndReturn<T extends GeneratedContentUpdateManyAndReturnArgs>(args: SelectSubset<T, GeneratedContentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedContentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GeneratedContent.
     * @param {GeneratedContentUpsertArgs} args - Arguments to update or create a GeneratedContent.
     * @example
     * // Update or create a GeneratedContent
     * const generatedContent = await prisma.generatedContent.upsert({
     *   create: {
     *     // ... data to create a GeneratedContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GeneratedContent we want to update
     *   }
     * })
     */
    upsert<T extends GeneratedContentUpsertArgs>(args: SelectSubset<T, GeneratedContentUpsertArgs<ExtArgs>>): Prisma__GeneratedContentClient<$Result.GetResult<Prisma.$GeneratedContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GeneratedContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedContentCountArgs} args - Arguments to filter GeneratedContents to count.
     * @example
     * // Count the number of GeneratedContents
     * const count = await prisma.generatedContent.count({
     *   where: {
     *     // ... the filter for the GeneratedContents we want to count
     *   }
     * })
    **/
    count<T extends GeneratedContentCountArgs>(
      args?: Subset<T, GeneratedContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeneratedContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GeneratedContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GeneratedContentAggregateArgs>(args: Subset<T, GeneratedContentAggregateArgs>): Prisma.PrismaPromise<GetGeneratedContentAggregateType<T>>

    /**
     * Group by GeneratedContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedContentGroupByArgs} args - Group by arguments.
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
      T extends GeneratedContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeneratedContentGroupByArgs['orderBy'] }
        : { orderBy?: GeneratedContentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GeneratedContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneratedContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GeneratedContent model
   */
  readonly fields: GeneratedContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GeneratedContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GeneratedContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GeneratedContent model
   */
  interface GeneratedContentFieldRefs {
    readonly id: FieldRef<"GeneratedContent", 'String'>
    readonly userId: FieldRef<"GeneratedContent", 'String'>
    readonly productName: FieldRef<"GeneratedContent", 'String'>
    readonly contentType: FieldRef<"GeneratedContent", 'String'>
    readonly tone: FieldRef<"GeneratedContent", 'String'>
    readonly platform: FieldRef<"GeneratedContent", 'String'>
    readonly content: FieldRef<"GeneratedContent", 'String'>
    readonly createdAt: FieldRef<"GeneratedContent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GeneratedContent findUnique
   */
  export type GeneratedContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedContent
     */
    select?: GeneratedContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedContent
     */
    omit?: GeneratedContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedContentInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedContent to fetch.
     */
    where: GeneratedContentWhereUniqueInput
  }

  /**
   * GeneratedContent findUniqueOrThrow
   */
  export type GeneratedContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedContent
     */
    select?: GeneratedContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedContent
     */
    omit?: GeneratedContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedContentInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedContent to fetch.
     */
    where: GeneratedContentWhereUniqueInput
  }

  /**
   * GeneratedContent findFirst
   */
  export type GeneratedContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedContent
     */
    select?: GeneratedContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedContent
     */
    omit?: GeneratedContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedContentInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedContent to fetch.
     */
    where?: GeneratedContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedContents to fetch.
     */
    orderBy?: GeneratedContentOrderByWithRelationInput | GeneratedContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneratedContents.
     */
    cursor?: GeneratedContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneratedContents.
     */
    distinct?: GeneratedContentScalarFieldEnum | GeneratedContentScalarFieldEnum[]
  }

  /**
   * GeneratedContent findFirstOrThrow
   */
  export type GeneratedContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedContent
     */
    select?: GeneratedContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedContent
     */
    omit?: GeneratedContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedContentInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedContent to fetch.
     */
    where?: GeneratedContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedContents to fetch.
     */
    orderBy?: GeneratedContentOrderByWithRelationInput | GeneratedContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneratedContents.
     */
    cursor?: GeneratedContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneratedContents.
     */
    distinct?: GeneratedContentScalarFieldEnum | GeneratedContentScalarFieldEnum[]
  }

  /**
   * GeneratedContent findMany
   */
  export type GeneratedContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedContent
     */
    select?: GeneratedContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedContent
     */
    omit?: GeneratedContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedContentInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedContents to fetch.
     */
    where?: GeneratedContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedContents to fetch.
     */
    orderBy?: GeneratedContentOrderByWithRelationInput | GeneratedContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GeneratedContents.
     */
    cursor?: GeneratedContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedContents.
     */
    skip?: number
    distinct?: GeneratedContentScalarFieldEnum | GeneratedContentScalarFieldEnum[]
  }

  /**
   * GeneratedContent create
   */
  export type GeneratedContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedContent
     */
    select?: GeneratedContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedContent
     */
    omit?: GeneratedContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedContentInclude<ExtArgs> | null
    /**
     * The data needed to create a GeneratedContent.
     */
    data: XOR<GeneratedContentCreateInput, GeneratedContentUncheckedCreateInput>
  }

  /**
   * GeneratedContent createMany
   */
  export type GeneratedContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GeneratedContents.
     */
    data: GeneratedContentCreateManyInput | GeneratedContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GeneratedContent createManyAndReturn
   */
  export type GeneratedContentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedContent
     */
    select?: GeneratedContentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedContent
     */
    omit?: GeneratedContentOmit<ExtArgs> | null
    /**
     * The data used to create many GeneratedContents.
     */
    data: GeneratedContentCreateManyInput | GeneratedContentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedContentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GeneratedContent update
   */
  export type GeneratedContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedContent
     */
    select?: GeneratedContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedContent
     */
    omit?: GeneratedContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedContentInclude<ExtArgs> | null
    /**
     * The data needed to update a GeneratedContent.
     */
    data: XOR<GeneratedContentUpdateInput, GeneratedContentUncheckedUpdateInput>
    /**
     * Choose, which GeneratedContent to update.
     */
    where: GeneratedContentWhereUniqueInput
  }

  /**
   * GeneratedContent updateMany
   */
  export type GeneratedContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GeneratedContents.
     */
    data: XOR<GeneratedContentUpdateManyMutationInput, GeneratedContentUncheckedUpdateManyInput>
    /**
     * Filter which GeneratedContents to update
     */
    where?: GeneratedContentWhereInput
    /**
     * Limit how many GeneratedContents to update.
     */
    limit?: number
  }

  /**
   * GeneratedContent updateManyAndReturn
   */
  export type GeneratedContentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedContent
     */
    select?: GeneratedContentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedContent
     */
    omit?: GeneratedContentOmit<ExtArgs> | null
    /**
     * The data used to update GeneratedContents.
     */
    data: XOR<GeneratedContentUpdateManyMutationInput, GeneratedContentUncheckedUpdateManyInput>
    /**
     * Filter which GeneratedContents to update
     */
    where?: GeneratedContentWhereInput
    /**
     * Limit how many GeneratedContents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedContentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GeneratedContent upsert
   */
  export type GeneratedContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedContent
     */
    select?: GeneratedContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedContent
     */
    omit?: GeneratedContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedContentInclude<ExtArgs> | null
    /**
     * The filter to search for the GeneratedContent to update in case it exists.
     */
    where: GeneratedContentWhereUniqueInput
    /**
     * In case the GeneratedContent found by the `where` argument doesn't exist, create a new GeneratedContent with this data.
     */
    create: XOR<GeneratedContentCreateInput, GeneratedContentUncheckedCreateInput>
    /**
     * In case the GeneratedContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GeneratedContentUpdateInput, GeneratedContentUncheckedUpdateInput>
  }

  /**
   * GeneratedContent delete
   */
  export type GeneratedContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedContent
     */
    select?: GeneratedContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedContent
     */
    omit?: GeneratedContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedContentInclude<ExtArgs> | null
    /**
     * Filter which GeneratedContent to delete.
     */
    where: GeneratedContentWhereUniqueInput
  }

  /**
   * GeneratedContent deleteMany
   */
  export type GeneratedContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneratedContents to delete
     */
    where?: GeneratedContentWhereInput
    /**
     * Limit how many GeneratedContents to delete.
     */
    limit?: number
  }

  /**
   * GeneratedContent without action
   */
  export type GeneratedContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedContent
     */
    select?: GeneratedContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedContent
     */
    omit?: GeneratedContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedContentInclude<ExtArgs> | null
  }


  /**
   * Model SavedProduct
   */

  export type AggregateSavedProduct = {
    _count: SavedProductCountAggregateOutputType | null
    _min: SavedProductMinAggregateOutputType | null
    _max: SavedProductMaxAggregateOutputType | null
  }

  export type SavedProductMinAggregateOutputType = {
    id: string | null
    userId: string | null
    productId: string | null
    savedAt: Date | null
  }

  export type SavedProductMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    productId: string | null
    savedAt: Date | null
  }

  export type SavedProductCountAggregateOutputType = {
    id: number
    userId: number
    productId: number
    savedAt: number
    _all: number
  }


  export type SavedProductMinAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    savedAt?: true
  }

  export type SavedProductMaxAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    savedAt?: true
  }

  export type SavedProductCountAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    savedAt?: true
    _all?: true
  }

  export type SavedProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedProduct to aggregate.
     */
    where?: SavedProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedProducts to fetch.
     */
    orderBy?: SavedProductOrderByWithRelationInput | SavedProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavedProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedProducts
    **/
    _count?: true | SavedProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedProductMaxAggregateInputType
  }

  export type GetSavedProductAggregateType<T extends SavedProductAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedProduct[P]>
      : GetScalarType<T[P], AggregateSavedProduct[P]>
  }




  export type SavedProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedProductWhereInput
    orderBy?: SavedProductOrderByWithAggregationInput | SavedProductOrderByWithAggregationInput[]
    by: SavedProductScalarFieldEnum[] | SavedProductScalarFieldEnum
    having?: SavedProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedProductCountAggregateInputType | true
    _min?: SavedProductMinAggregateInputType
    _max?: SavedProductMaxAggregateInputType
  }

  export type SavedProductGroupByOutputType = {
    id: string
    userId: string
    productId: string
    savedAt: Date
    _count: SavedProductCountAggregateOutputType | null
    _min: SavedProductMinAggregateOutputType | null
    _max: SavedProductMaxAggregateOutputType | null
  }

  type GetSavedProductGroupByPayload<T extends SavedProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavedProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedProductGroupByOutputType[P]>
            : GetScalarType<T[P], SavedProductGroupByOutputType[P]>
        }
      >
    >


  export type SavedProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    savedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedProduct"]>

  export type SavedProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    savedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedProduct"]>

  export type SavedProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    savedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedProduct"]>

  export type SavedProductSelectScalar = {
    id?: boolean
    userId?: boolean
    productId?: boolean
    savedAt?: boolean
  }

  export type SavedProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "productId" | "savedAt", ExtArgs["result"]["savedProduct"]>
  export type SavedProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type SavedProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type SavedProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $SavedProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavedProduct"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      productId: string
      savedAt: Date
    }, ExtArgs["result"]["savedProduct"]>
    composites: {}
  }

  type SavedProductGetPayload<S extends boolean | null | undefined | SavedProductDefaultArgs> = $Result.GetResult<Prisma.$SavedProductPayload, S>

  type SavedProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SavedProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavedProductCountAggregateInputType | true
    }

  export interface SavedProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavedProduct'], meta: { name: 'SavedProduct' } }
    /**
     * Find zero or one SavedProduct that matches the filter.
     * @param {SavedProductFindUniqueArgs} args - Arguments to find a SavedProduct
     * @example
     * // Get one SavedProduct
     * const savedProduct = await prisma.savedProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedProductFindUniqueArgs>(args: SelectSubset<T, SavedProductFindUniqueArgs<ExtArgs>>): Prisma__SavedProductClient<$Result.GetResult<Prisma.$SavedProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SavedProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavedProductFindUniqueOrThrowArgs} args - Arguments to find a SavedProduct
     * @example
     * // Get one SavedProduct
     * const savedProduct = await prisma.savedProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedProductFindUniqueOrThrowArgs>(args: SelectSubset<T, SavedProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavedProductClient<$Result.GetResult<Prisma.$SavedProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedProductFindFirstArgs} args - Arguments to find a SavedProduct
     * @example
     * // Get one SavedProduct
     * const savedProduct = await prisma.savedProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedProductFindFirstArgs>(args?: SelectSubset<T, SavedProductFindFirstArgs<ExtArgs>>): Prisma__SavedProductClient<$Result.GetResult<Prisma.$SavedProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedProductFindFirstOrThrowArgs} args - Arguments to find a SavedProduct
     * @example
     * // Get one SavedProduct
     * const savedProduct = await prisma.savedProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedProductFindFirstOrThrowArgs>(args?: SelectSubset<T, SavedProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavedProductClient<$Result.GetResult<Prisma.$SavedProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavedProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedProducts
     * const savedProducts = await prisma.savedProduct.findMany()
     * 
     * // Get first 10 SavedProducts
     * const savedProducts = await prisma.savedProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savedProductWithIdOnly = await prisma.savedProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavedProductFindManyArgs>(args?: SelectSubset<T, SavedProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SavedProduct.
     * @param {SavedProductCreateArgs} args - Arguments to create a SavedProduct.
     * @example
     * // Create one SavedProduct
     * const SavedProduct = await prisma.savedProduct.create({
     *   data: {
     *     // ... data to create a SavedProduct
     *   }
     * })
     * 
     */
    create<T extends SavedProductCreateArgs>(args: SelectSubset<T, SavedProductCreateArgs<ExtArgs>>): Prisma__SavedProductClient<$Result.GetResult<Prisma.$SavedProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SavedProducts.
     * @param {SavedProductCreateManyArgs} args - Arguments to create many SavedProducts.
     * @example
     * // Create many SavedProducts
     * const savedProduct = await prisma.savedProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavedProductCreateManyArgs>(args?: SelectSubset<T, SavedProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SavedProducts and returns the data saved in the database.
     * @param {SavedProductCreateManyAndReturnArgs} args - Arguments to create many SavedProducts.
     * @example
     * // Create many SavedProducts
     * const savedProduct = await prisma.savedProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SavedProducts and only return the `id`
     * const savedProductWithIdOnly = await prisma.savedProduct.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SavedProductCreateManyAndReturnArgs>(args?: SelectSubset<T, SavedProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SavedProduct.
     * @param {SavedProductDeleteArgs} args - Arguments to delete one SavedProduct.
     * @example
     * // Delete one SavedProduct
     * const SavedProduct = await prisma.savedProduct.delete({
     *   where: {
     *     // ... filter to delete one SavedProduct
     *   }
     * })
     * 
     */
    delete<T extends SavedProductDeleteArgs>(args: SelectSubset<T, SavedProductDeleteArgs<ExtArgs>>): Prisma__SavedProductClient<$Result.GetResult<Prisma.$SavedProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SavedProduct.
     * @param {SavedProductUpdateArgs} args - Arguments to update one SavedProduct.
     * @example
     * // Update one SavedProduct
     * const savedProduct = await prisma.savedProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavedProductUpdateArgs>(args: SelectSubset<T, SavedProductUpdateArgs<ExtArgs>>): Prisma__SavedProductClient<$Result.GetResult<Prisma.$SavedProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SavedProducts.
     * @param {SavedProductDeleteManyArgs} args - Arguments to filter SavedProducts to delete.
     * @example
     * // Delete a few SavedProducts
     * const { count } = await prisma.savedProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavedProductDeleteManyArgs>(args?: SelectSubset<T, SavedProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedProducts
     * const savedProduct = await prisma.savedProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavedProductUpdateManyArgs>(args: SelectSubset<T, SavedProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedProducts and returns the data updated in the database.
     * @param {SavedProductUpdateManyAndReturnArgs} args - Arguments to update many SavedProducts.
     * @example
     * // Update many SavedProducts
     * const savedProduct = await prisma.savedProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SavedProducts and only return the `id`
     * const savedProductWithIdOnly = await prisma.savedProduct.updateManyAndReturn({
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
    updateManyAndReturn<T extends SavedProductUpdateManyAndReturnArgs>(args: SelectSubset<T, SavedProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SavedProduct.
     * @param {SavedProductUpsertArgs} args - Arguments to update or create a SavedProduct.
     * @example
     * // Update or create a SavedProduct
     * const savedProduct = await prisma.savedProduct.upsert({
     *   create: {
     *     // ... data to create a SavedProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedProduct we want to update
     *   }
     * })
     */
    upsert<T extends SavedProductUpsertArgs>(args: SelectSubset<T, SavedProductUpsertArgs<ExtArgs>>): Prisma__SavedProductClient<$Result.GetResult<Prisma.$SavedProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SavedProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedProductCountArgs} args - Arguments to filter SavedProducts to count.
     * @example
     * // Count the number of SavedProducts
     * const count = await prisma.savedProduct.count({
     *   where: {
     *     // ... the filter for the SavedProducts we want to count
     *   }
     * })
    **/
    count<T extends SavedProductCountArgs>(
      args?: Subset<T, SavedProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SavedProductAggregateArgs>(args: Subset<T, SavedProductAggregateArgs>): Prisma.PrismaPromise<GetSavedProductAggregateType<T>>

    /**
     * Group by SavedProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedProductGroupByArgs} args - Group by arguments.
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
      T extends SavedProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedProductGroupByArgs['orderBy'] }
        : { orderBy?: SavedProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SavedProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavedProduct model
   */
  readonly fields: SavedProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavedProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SavedProduct model
   */
  interface SavedProductFieldRefs {
    readonly id: FieldRef<"SavedProduct", 'String'>
    readonly userId: FieldRef<"SavedProduct", 'String'>
    readonly productId: FieldRef<"SavedProduct", 'String'>
    readonly savedAt: FieldRef<"SavedProduct", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SavedProduct findUnique
   */
  export type SavedProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductInclude<ExtArgs> | null
    /**
     * Filter, which SavedProduct to fetch.
     */
    where: SavedProductWhereUniqueInput
  }

  /**
   * SavedProduct findUniqueOrThrow
   */
  export type SavedProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductInclude<ExtArgs> | null
    /**
     * Filter, which SavedProduct to fetch.
     */
    where: SavedProductWhereUniqueInput
  }

  /**
   * SavedProduct findFirst
   */
  export type SavedProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductInclude<ExtArgs> | null
    /**
     * Filter, which SavedProduct to fetch.
     */
    where?: SavedProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedProducts to fetch.
     */
    orderBy?: SavedProductOrderByWithRelationInput | SavedProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedProducts.
     */
    cursor?: SavedProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedProducts.
     */
    distinct?: SavedProductScalarFieldEnum | SavedProductScalarFieldEnum[]
  }

  /**
   * SavedProduct findFirstOrThrow
   */
  export type SavedProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductInclude<ExtArgs> | null
    /**
     * Filter, which SavedProduct to fetch.
     */
    where?: SavedProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedProducts to fetch.
     */
    orderBy?: SavedProductOrderByWithRelationInput | SavedProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedProducts.
     */
    cursor?: SavedProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedProducts.
     */
    distinct?: SavedProductScalarFieldEnum | SavedProductScalarFieldEnum[]
  }

  /**
   * SavedProduct findMany
   */
  export type SavedProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductInclude<ExtArgs> | null
    /**
     * Filter, which SavedProducts to fetch.
     */
    where?: SavedProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedProducts to fetch.
     */
    orderBy?: SavedProductOrderByWithRelationInput | SavedProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedProducts.
     */
    cursor?: SavedProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedProducts.
     */
    skip?: number
    distinct?: SavedProductScalarFieldEnum | SavedProductScalarFieldEnum[]
  }

  /**
   * SavedProduct create
   */
  export type SavedProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductInclude<ExtArgs> | null
    /**
     * The data needed to create a SavedProduct.
     */
    data: XOR<SavedProductCreateInput, SavedProductUncheckedCreateInput>
  }

  /**
   * SavedProduct createMany
   */
  export type SavedProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedProducts.
     */
    data: SavedProductCreateManyInput | SavedProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavedProduct createManyAndReturn
   */
  export type SavedProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * The data used to create many SavedProducts.
     */
    data: SavedProductCreateManyInput | SavedProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedProduct update
   */
  export type SavedProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductInclude<ExtArgs> | null
    /**
     * The data needed to update a SavedProduct.
     */
    data: XOR<SavedProductUpdateInput, SavedProductUncheckedUpdateInput>
    /**
     * Choose, which SavedProduct to update.
     */
    where: SavedProductWhereUniqueInput
  }

  /**
   * SavedProduct updateMany
   */
  export type SavedProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedProducts.
     */
    data: XOR<SavedProductUpdateManyMutationInput, SavedProductUncheckedUpdateManyInput>
    /**
     * Filter which SavedProducts to update
     */
    where?: SavedProductWhereInput
    /**
     * Limit how many SavedProducts to update.
     */
    limit?: number
  }

  /**
   * SavedProduct updateManyAndReturn
   */
  export type SavedProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * The data used to update SavedProducts.
     */
    data: XOR<SavedProductUpdateManyMutationInput, SavedProductUncheckedUpdateManyInput>
    /**
     * Filter which SavedProducts to update
     */
    where?: SavedProductWhereInput
    /**
     * Limit how many SavedProducts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedProduct upsert
   */
  export type SavedProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductInclude<ExtArgs> | null
    /**
     * The filter to search for the SavedProduct to update in case it exists.
     */
    where: SavedProductWhereUniqueInput
    /**
     * In case the SavedProduct found by the `where` argument doesn't exist, create a new SavedProduct with this data.
     */
    create: XOR<SavedProductCreateInput, SavedProductUncheckedCreateInput>
    /**
     * In case the SavedProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavedProductUpdateInput, SavedProductUncheckedUpdateInput>
  }

  /**
   * SavedProduct delete
   */
  export type SavedProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductInclude<ExtArgs> | null
    /**
     * Filter which SavedProduct to delete.
     */
    where: SavedProductWhereUniqueInput
  }

  /**
   * SavedProduct deleteMany
   */
  export type SavedProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedProducts to delete
     */
    where?: SavedProductWhereInput
    /**
     * Limit how many SavedProducts to delete.
     */
    limit?: number
  }

  /**
   * SavedProduct without action
   */
  export type SavedProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProduct
     */
    select?: SavedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedProduct
     */
    omit?: SavedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProductInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    role: 'role',
    freeLicenseAvailable: 'freeLicenseAvailable',
    kitsClaimedThisPeriod: 'kitsClaimedThisPeriod',
    kitPeriodStart: 'kitPeriodStart',
    extraKits: 'extraKits',
    onboardingCompleted: 'onboardingCompleted',
    experienceLevel: 'experienceLevel',
    sellingPlatforms: 'sellingPlatforms',
    interestedNiches: 'interestedNiches',
    primaryGoal: 'primaryGoal',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    shortDescription: 'shortDescription',
    image: 'image',
    isFreeProduct: 'isFreeProduct',
    totalLicenses: 'totalLicenses',
    claimedLicenses: 'claimedLicenses',
    category: 'category',
    featured: 'featured',
    difficulty: 'difficulty',
    sellingPlatforms: 'sellingPlatforms',
    languages: 'languages',
    demandLabel: 'demandLabel',
    exclusiveLicensePrice: 'exclusiveLicensePrice',
    exclusiveLicenseSold: 'exclusiveLicenseSold',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductAssetScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    name: 'name',
    type: 'type',
    fileUrl: 'fileUrl',
    fileSize: 'fileSize',
    createdAt: 'createdAt'
  };

  export type ProductAssetScalarFieldEnum = (typeof ProductAssetScalarFieldEnum)[keyof typeof ProductAssetScalarFieldEnum]


  export const UserLicenseScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    productId: 'productId',
    licenseType: 'licenseType',
    claimedAt: 'claimedAt'
  };

  export type UserLicenseScalarFieldEnum = (typeof UserLicenseScalarFieldEnum)[keyof typeof UserLicenseScalarFieldEnum]


  export const IntegrationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    provider: 'provider',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    metadata: 'metadata',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IntegrationScalarFieldEnum = (typeof IntegrationScalarFieldEnum)[keyof typeof IntegrationScalarFieldEnum]


  export const GeneratedContentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    productName: 'productName',
    contentType: 'contentType',
    tone: 'tone',
    platform: 'platform',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type GeneratedContentScalarFieldEnum = (typeof GeneratedContentScalarFieldEnum)[keyof typeof GeneratedContentScalarFieldEnum]


  export const SavedProductScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    productId: 'productId',
    savedAt: 'savedAt'
  };

  export type SavedProductScalarFieldEnum = (typeof SavedProductScalarFieldEnum)[keyof typeof SavedProductScalarFieldEnum]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Difficulty'
   */
  export type EnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty'>
    


  /**
   * Reference to a field of type 'Difficulty[]'
   */
  export type ListEnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'LicenseType'
   */
  export type EnumLicenseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LicenseType'>
    


  /**
   * Reference to a field of type 'LicenseType[]'
   */
  export type ListEnumLicenseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LicenseType[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    freeLicenseAvailable?: IntFilter<"User"> | number
    kitsClaimedThisPeriod?: IntFilter<"User"> | number
    kitPeriodStart?: DateTimeNullableFilter<"User"> | Date | string | null
    extraKits?: IntFilter<"User"> | number
    onboardingCompleted?: BoolFilter<"User"> | boolean
    experienceLevel?: StringNullableFilter<"User"> | string | null
    sellingPlatforms?: StringNullableListFilter<"User">
    interestedNiches?: StringNullableListFilter<"User">
    primaryGoal?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    posts?: PostListRelationFilter
    licenses?: UserLicenseListRelationFilter
    savedProducts?: SavedProductListRelationFilter
    integrations?: IntegrationListRelationFilter
    generatedContent?: GeneratedContentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    freeLicenseAvailable?: SortOrder
    kitsClaimedThisPeriod?: SortOrder
    kitPeriodStart?: SortOrderInput | SortOrder
    extraKits?: SortOrder
    onboardingCompleted?: SortOrder
    experienceLevel?: SortOrderInput | SortOrder
    sellingPlatforms?: SortOrder
    interestedNiches?: SortOrder
    primaryGoal?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    licenses?: UserLicenseOrderByRelationAggregateInput
    savedProducts?: SavedProductOrderByRelationAggregateInput
    integrations?: IntegrationOrderByRelationAggregateInput
    generatedContent?: GeneratedContentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    freeLicenseAvailable?: IntFilter<"User"> | number
    kitsClaimedThisPeriod?: IntFilter<"User"> | number
    kitPeriodStart?: DateTimeNullableFilter<"User"> | Date | string | null
    extraKits?: IntFilter<"User"> | number
    onboardingCompleted?: BoolFilter<"User"> | boolean
    experienceLevel?: StringNullableFilter<"User"> | string | null
    sellingPlatforms?: StringNullableListFilter<"User">
    interestedNiches?: StringNullableListFilter<"User">
    primaryGoal?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    posts?: PostListRelationFilter
    licenses?: UserLicenseListRelationFilter
    savedProducts?: SavedProductListRelationFilter
    integrations?: IntegrationListRelationFilter
    generatedContent?: GeneratedContentListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    freeLicenseAvailable?: SortOrder
    kitsClaimedThisPeriod?: SortOrder
    kitPeriodStart?: SortOrderInput | SortOrder
    extraKits?: SortOrder
    onboardingCompleted?: SortOrder
    experienceLevel?: SortOrderInput | SortOrder
    sellingPlatforms?: SortOrder
    interestedNiches?: SortOrder
    primaryGoal?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    freeLicenseAvailable?: IntWithAggregatesFilter<"User"> | number
    kitsClaimedThisPeriod?: IntWithAggregatesFilter<"User"> | number
    kitPeriodStart?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    extraKits?: IntWithAggregatesFilter<"User"> | number
    onboardingCompleted?: BoolWithAggregatesFilter<"User"> | boolean
    experienceLevel?: StringNullableWithAggregatesFilter<"User"> | string | null
    sellingPlatforms?: StringNullableListFilter<"User">
    interestedNiches?: StringNullableListFilter<"User">
    primaryGoal?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdById?: StringFilter<"Post"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    createdBy?: UserOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdById?: StringFilter<"Post"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    name?: StringWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    createdById?: StringWithAggregatesFilter<"Post"> | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    slug?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    shortDescription?: StringFilter<"Product"> | string
    image?: StringNullableFilter<"Product"> | string | null
    isFreeProduct?: BoolFilter<"Product"> | boolean
    totalLicenses?: IntFilter<"Product"> | number
    claimedLicenses?: IntFilter<"Product"> | number
    category?: StringFilter<"Product"> | string
    featured?: BoolFilter<"Product"> | boolean
    difficulty?: EnumDifficultyFilter<"Product"> | $Enums.Difficulty
    sellingPlatforms?: StringNullableListFilter<"Product">
    languages?: StringNullableListFilter<"Product">
    demandLabel?: StringNullableFilter<"Product"> | string | null
    exclusiveLicensePrice?: FloatNullableFilter<"Product"> | number | null
    exclusiveLicenseSold?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    assets?: ProductAssetListRelationFilter
    licenses?: UserLicenseListRelationFilter
    savedBy?: SavedProductListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    shortDescription?: SortOrder
    image?: SortOrderInput | SortOrder
    isFreeProduct?: SortOrder
    totalLicenses?: SortOrder
    claimedLicenses?: SortOrder
    category?: SortOrder
    featured?: SortOrder
    difficulty?: SortOrder
    sellingPlatforms?: SortOrder
    languages?: SortOrder
    demandLabel?: SortOrderInput | SortOrder
    exclusiveLicensePrice?: SortOrderInput | SortOrder
    exclusiveLicenseSold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assets?: ProductAssetOrderByRelationAggregateInput
    licenses?: UserLicenseOrderByRelationAggregateInput
    savedBy?: SavedProductOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    shortDescription?: StringFilter<"Product"> | string
    image?: StringNullableFilter<"Product"> | string | null
    isFreeProduct?: BoolFilter<"Product"> | boolean
    totalLicenses?: IntFilter<"Product"> | number
    claimedLicenses?: IntFilter<"Product"> | number
    category?: StringFilter<"Product"> | string
    featured?: BoolFilter<"Product"> | boolean
    difficulty?: EnumDifficultyFilter<"Product"> | $Enums.Difficulty
    sellingPlatforms?: StringNullableListFilter<"Product">
    languages?: StringNullableListFilter<"Product">
    demandLabel?: StringNullableFilter<"Product"> | string | null
    exclusiveLicensePrice?: FloatNullableFilter<"Product"> | number | null
    exclusiveLicenseSold?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    assets?: ProductAssetListRelationFilter
    licenses?: UserLicenseListRelationFilter
    savedBy?: SavedProductListRelationFilter
  }, "id" | "slug">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    shortDescription?: SortOrder
    image?: SortOrderInput | SortOrder
    isFreeProduct?: SortOrder
    totalLicenses?: SortOrder
    claimedLicenses?: SortOrder
    category?: SortOrder
    featured?: SortOrder
    difficulty?: SortOrder
    sellingPlatforms?: SortOrder
    languages?: SortOrder
    demandLabel?: SortOrderInput | SortOrder
    exclusiveLicensePrice?: SortOrderInput | SortOrder
    exclusiveLicenseSold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    slug?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    shortDescription?: StringWithAggregatesFilter<"Product"> | string
    image?: StringNullableWithAggregatesFilter<"Product"> | string | null
    isFreeProduct?: BoolWithAggregatesFilter<"Product"> | boolean
    totalLicenses?: IntWithAggregatesFilter<"Product"> | number
    claimedLicenses?: IntWithAggregatesFilter<"Product"> | number
    category?: StringWithAggregatesFilter<"Product"> | string
    featured?: BoolWithAggregatesFilter<"Product"> | boolean
    difficulty?: EnumDifficultyWithAggregatesFilter<"Product"> | $Enums.Difficulty
    sellingPlatforms?: StringNullableListFilter<"Product">
    languages?: StringNullableListFilter<"Product">
    demandLabel?: StringNullableWithAggregatesFilter<"Product"> | string | null
    exclusiveLicensePrice?: FloatNullableWithAggregatesFilter<"Product"> | number | null
    exclusiveLicenseSold?: BoolWithAggregatesFilter<"Product"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type ProductAssetWhereInput = {
    AND?: ProductAssetWhereInput | ProductAssetWhereInput[]
    OR?: ProductAssetWhereInput[]
    NOT?: ProductAssetWhereInput | ProductAssetWhereInput[]
    id?: StringFilter<"ProductAsset"> | string
    productId?: StringFilter<"ProductAsset"> | string
    name?: StringFilter<"ProductAsset"> | string
    type?: StringFilter<"ProductAsset"> | string
    fileUrl?: StringFilter<"ProductAsset"> | string
    fileSize?: StringNullableFilter<"ProductAsset"> | string | null
    createdAt?: DateTimeFilter<"ProductAsset"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ProductAssetOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ProductAssetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductAssetWhereInput | ProductAssetWhereInput[]
    OR?: ProductAssetWhereInput[]
    NOT?: ProductAssetWhereInput | ProductAssetWhereInput[]
    productId?: StringFilter<"ProductAsset"> | string
    name?: StringFilter<"ProductAsset"> | string
    type?: StringFilter<"ProductAsset"> | string
    fileUrl?: StringFilter<"ProductAsset"> | string
    fileSize?: StringNullableFilter<"ProductAsset"> | string | null
    createdAt?: DateTimeFilter<"ProductAsset"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type ProductAssetOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ProductAssetCountOrderByAggregateInput
    _max?: ProductAssetMaxOrderByAggregateInput
    _min?: ProductAssetMinOrderByAggregateInput
  }

  export type ProductAssetScalarWhereWithAggregatesInput = {
    AND?: ProductAssetScalarWhereWithAggregatesInput | ProductAssetScalarWhereWithAggregatesInput[]
    OR?: ProductAssetScalarWhereWithAggregatesInput[]
    NOT?: ProductAssetScalarWhereWithAggregatesInput | ProductAssetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductAsset"> | string
    productId?: StringWithAggregatesFilter<"ProductAsset"> | string
    name?: StringWithAggregatesFilter<"ProductAsset"> | string
    type?: StringWithAggregatesFilter<"ProductAsset"> | string
    fileUrl?: StringWithAggregatesFilter<"ProductAsset"> | string
    fileSize?: StringNullableWithAggregatesFilter<"ProductAsset"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ProductAsset"> | Date | string
  }

  export type UserLicenseWhereInput = {
    AND?: UserLicenseWhereInput | UserLicenseWhereInput[]
    OR?: UserLicenseWhereInput[]
    NOT?: UserLicenseWhereInput | UserLicenseWhereInput[]
    id?: StringFilter<"UserLicense"> | string
    userId?: StringFilter<"UserLicense"> | string
    productId?: StringFilter<"UserLicense"> | string
    licenseType?: EnumLicenseTypeFilter<"UserLicense"> | $Enums.LicenseType
    claimedAt?: DateTimeFilter<"UserLicense"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type UserLicenseOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    licenseType?: SortOrder
    claimedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type UserLicenseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_productId?: UserLicenseUserIdProductIdCompoundUniqueInput
    AND?: UserLicenseWhereInput | UserLicenseWhereInput[]
    OR?: UserLicenseWhereInput[]
    NOT?: UserLicenseWhereInput | UserLicenseWhereInput[]
    userId?: StringFilter<"UserLicense"> | string
    productId?: StringFilter<"UserLicense"> | string
    licenseType?: EnumLicenseTypeFilter<"UserLicense"> | $Enums.LicenseType
    claimedAt?: DateTimeFilter<"UserLicense"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id" | "userId_productId">

  export type UserLicenseOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    licenseType?: SortOrder
    claimedAt?: SortOrder
    _count?: UserLicenseCountOrderByAggregateInput
    _max?: UserLicenseMaxOrderByAggregateInput
    _min?: UserLicenseMinOrderByAggregateInput
  }

  export type UserLicenseScalarWhereWithAggregatesInput = {
    AND?: UserLicenseScalarWhereWithAggregatesInput | UserLicenseScalarWhereWithAggregatesInput[]
    OR?: UserLicenseScalarWhereWithAggregatesInput[]
    NOT?: UserLicenseScalarWhereWithAggregatesInput | UserLicenseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserLicense"> | string
    userId?: StringWithAggregatesFilter<"UserLicense"> | string
    productId?: StringWithAggregatesFilter<"UserLicense"> | string
    licenseType?: EnumLicenseTypeWithAggregatesFilter<"UserLicense"> | $Enums.LicenseType
    claimedAt?: DateTimeWithAggregatesFilter<"UserLicense"> | Date | string
  }

  export type IntegrationWhereInput = {
    AND?: IntegrationWhereInput | IntegrationWhereInput[]
    OR?: IntegrationWhereInput[]
    NOT?: IntegrationWhereInput | IntegrationWhereInput[]
    id?: StringFilter<"Integration"> | string
    userId?: StringFilter<"Integration"> | string
    provider?: StringFilter<"Integration"> | string
    accessToken?: StringFilter<"Integration"> | string
    refreshToken?: StringNullableFilter<"Integration"> | string | null
    metadata?: StringNullableFilter<"Integration"> | string | null
    expiresAt?: DateTimeNullableFilter<"Integration"> | Date | string | null
    createdAt?: DateTimeFilter<"Integration"> | Date | string
    updatedAt?: DateTimeFilter<"Integration"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type IntegrationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type IntegrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_provider?: IntegrationUserIdProviderCompoundUniqueInput
    AND?: IntegrationWhereInput | IntegrationWhereInput[]
    OR?: IntegrationWhereInput[]
    NOT?: IntegrationWhereInput | IntegrationWhereInput[]
    userId?: StringFilter<"Integration"> | string
    provider?: StringFilter<"Integration"> | string
    accessToken?: StringFilter<"Integration"> | string
    refreshToken?: StringNullableFilter<"Integration"> | string | null
    metadata?: StringNullableFilter<"Integration"> | string | null
    expiresAt?: DateTimeNullableFilter<"Integration"> | Date | string | null
    createdAt?: DateTimeFilter<"Integration"> | Date | string
    updatedAt?: DateTimeFilter<"Integration"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_provider">

  export type IntegrationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IntegrationCountOrderByAggregateInput
    _max?: IntegrationMaxOrderByAggregateInput
    _min?: IntegrationMinOrderByAggregateInput
  }

  export type IntegrationScalarWhereWithAggregatesInput = {
    AND?: IntegrationScalarWhereWithAggregatesInput | IntegrationScalarWhereWithAggregatesInput[]
    OR?: IntegrationScalarWhereWithAggregatesInput[]
    NOT?: IntegrationScalarWhereWithAggregatesInput | IntegrationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Integration"> | string
    userId?: StringWithAggregatesFilter<"Integration"> | string
    provider?: StringWithAggregatesFilter<"Integration"> | string
    accessToken?: StringWithAggregatesFilter<"Integration"> | string
    refreshToken?: StringNullableWithAggregatesFilter<"Integration"> | string | null
    metadata?: StringNullableWithAggregatesFilter<"Integration"> | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Integration"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Integration"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Integration"> | Date | string
  }

  export type GeneratedContentWhereInput = {
    AND?: GeneratedContentWhereInput | GeneratedContentWhereInput[]
    OR?: GeneratedContentWhereInput[]
    NOT?: GeneratedContentWhereInput | GeneratedContentWhereInput[]
    id?: StringFilter<"GeneratedContent"> | string
    userId?: StringFilter<"GeneratedContent"> | string
    productName?: StringFilter<"GeneratedContent"> | string
    contentType?: StringFilter<"GeneratedContent"> | string
    tone?: StringFilter<"GeneratedContent"> | string
    platform?: StringNullableFilter<"GeneratedContent"> | string | null
    content?: StringFilter<"GeneratedContent"> | string
    createdAt?: DateTimeFilter<"GeneratedContent"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GeneratedContentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    productName?: SortOrder
    contentType?: SortOrder
    tone?: SortOrder
    platform?: SortOrderInput | SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type GeneratedContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GeneratedContentWhereInput | GeneratedContentWhereInput[]
    OR?: GeneratedContentWhereInput[]
    NOT?: GeneratedContentWhereInput | GeneratedContentWhereInput[]
    userId?: StringFilter<"GeneratedContent"> | string
    productName?: StringFilter<"GeneratedContent"> | string
    contentType?: StringFilter<"GeneratedContent"> | string
    tone?: StringFilter<"GeneratedContent"> | string
    platform?: StringNullableFilter<"GeneratedContent"> | string | null
    content?: StringFilter<"GeneratedContent"> | string
    createdAt?: DateTimeFilter<"GeneratedContent"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type GeneratedContentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    productName?: SortOrder
    contentType?: SortOrder
    tone?: SortOrder
    platform?: SortOrderInput | SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: GeneratedContentCountOrderByAggregateInput
    _max?: GeneratedContentMaxOrderByAggregateInput
    _min?: GeneratedContentMinOrderByAggregateInput
  }

  export type GeneratedContentScalarWhereWithAggregatesInput = {
    AND?: GeneratedContentScalarWhereWithAggregatesInput | GeneratedContentScalarWhereWithAggregatesInput[]
    OR?: GeneratedContentScalarWhereWithAggregatesInput[]
    NOT?: GeneratedContentScalarWhereWithAggregatesInput | GeneratedContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GeneratedContent"> | string
    userId?: StringWithAggregatesFilter<"GeneratedContent"> | string
    productName?: StringWithAggregatesFilter<"GeneratedContent"> | string
    contentType?: StringWithAggregatesFilter<"GeneratedContent"> | string
    tone?: StringWithAggregatesFilter<"GeneratedContent"> | string
    platform?: StringNullableWithAggregatesFilter<"GeneratedContent"> | string | null
    content?: StringWithAggregatesFilter<"GeneratedContent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GeneratedContent"> | Date | string
  }

  export type SavedProductWhereInput = {
    AND?: SavedProductWhereInput | SavedProductWhereInput[]
    OR?: SavedProductWhereInput[]
    NOT?: SavedProductWhereInput | SavedProductWhereInput[]
    id?: StringFilter<"SavedProduct"> | string
    userId?: StringFilter<"SavedProduct"> | string
    productId?: StringFilter<"SavedProduct"> | string
    savedAt?: DateTimeFilter<"SavedProduct"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type SavedProductOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    savedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type SavedProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_productId?: SavedProductUserIdProductIdCompoundUniqueInput
    AND?: SavedProductWhereInput | SavedProductWhereInput[]
    OR?: SavedProductWhereInput[]
    NOT?: SavedProductWhereInput | SavedProductWhereInput[]
    userId?: StringFilter<"SavedProduct"> | string
    productId?: StringFilter<"SavedProduct"> | string
    savedAt?: DateTimeFilter<"SavedProduct"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id" | "userId_productId">

  export type SavedProductOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    savedAt?: SortOrder
    _count?: SavedProductCountOrderByAggregateInput
    _max?: SavedProductMaxOrderByAggregateInput
    _min?: SavedProductMinOrderByAggregateInput
  }

  export type SavedProductScalarWhereWithAggregatesInput = {
    AND?: SavedProductScalarWhereWithAggregatesInput | SavedProductScalarWhereWithAggregatesInput[]
    OR?: SavedProductScalarWhereWithAggregatesInput[]
    NOT?: SavedProductScalarWhereWithAggregatesInput | SavedProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SavedProduct"> | string
    userId?: StringWithAggregatesFilter<"SavedProduct"> | string
    productId?: StringWithAggregatesFilter<"SavedProduct"> | string
    savedAt?: DateTimeWithAggregatesFilter<"SavedProduct"> | Date | string
  }

  export type UserCreateInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    role?: $Enums.UserRole
    freeLicenseAvailable?: number
    kitsClaimedThisPeriod?: number
    kitPeriodStart?: Date | string | null
    extraKits?: number
    onboardingCompleted?: boolean
    experienceLevel?: string | null
    sellingPlatforms?: UserCreatesellingPlatformsInput | string[]
    interestedNiches?: UserCreateinterestedNichesInput | string[]
    primaryGoal?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    licenses?: UserLicenseCreateNestedManyWithoutUserInput
    savedProducts?: SavedProductCreateNestedManyWithoutUserInput
    integrations?: IntegrationCreateNestedManyWithoutUserInput
    generatedContent?: GeneratedContentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    role?: $Enums.UserRole
    freeLicenseAvailable?: number
    kitsClaimedThisPeriod?: number
    kitPeriodStart?: Date | string | null
    extraKits?: number
    onboardingCompleted?: boolean
    experienceLevel?: string | null
    sellingPlatforms?: UserCreatesellingPlatformsInput | string[]
    interestedNiches?: UserCreateinterestedNichesInput | string[]
    primaryGoal?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    licenses?: UserLicenseUncheckedCreateNestedManyWithoutUserInput
    savedProducts?: SavedProductUncheckedCreateNestedManyWithoutUserInput
    integrations?: IntegrationUncheckedCreateNestedManyWithoutUserInput
    generatedContent?: GeneratedContentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    freeLicenseAvailable?: IntFieldUpdateOperationsInput | number
    kitsClaimedThisPeriod?: IntFieldUpdateOperationsInput | number
    kitPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extraKits?: IntFieldUpdateOperationsInput | number
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    sellingPlatforms?: UserUpdatesellingPlatformsInput | string[]
    interestedNiches?: UserUpdateinterestedNichesInput | string[]
    primaryGoal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    licenses?: UserLicenseUpdateManyWithoutUserNestedInput
    savedProducts?: SavedProductUpdateManyWithoutUserNestedInput
    integrations?: IntegrationUpdateManyWithoutUserNestedInput
    generatedContent?: GeneratedContentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    freeLicenseAvailable?: IntFieldUpdateOperationsInput | number
    kitsClaimedThisPeriod?: IntFieldUpdateOperationsInput | number
    kitPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extraKits?: IntFieldUpdateOperationsInput | number
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    sellingPlatforms?: UserUpdatesellingPlatformsInput | string[]
    interestedNiches?: UserUpdateinterestedNichesInput | string[]
    primaryGoal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    licenses?: UserLicenseUncheckedUpdateManyWithoutUserNestedInput
    savedProducts?: SavedProductUncheckedUpdateManyWithoutUserNestedInput
    integrations?: IntegrationUncheckedUpdateManyWithoutUserNestedInput
    generatedContent?: GeneratedContentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    role?: $Enums.UserRole
    freeLicenseAvailable?: number
    kitsClaimedThisPeriod?: number
    kitPeriodStart?: Date | string | null
    extraKits?: number
    onboardingCompleted?: boolean
    experienceLevel?: string | null
    sellingPlatforms?: UserCreatesellingPlatformsInput | string[]
    interestedNiches?: UserCreateinterestedNichesInput | string[]
    primaryGoal?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    freeLicenseAvailable?: IntFieldUpdateOperationsInput | number
    kitsClaimedThisPeriod?: IntFieldUpdateOperationsInput | number
    kitPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extraKits?: IntFieldUpdateOperationsInput | number
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    sellingPlatforms?: UserUpdatesellingPlatformsInput | string[]
    interestedNiches?: UserUpdateinterestedNichesInput | string[]
    primaryGoal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    freeLicenseAvailable?: IntFieldUpdateOperationsInput | number
    kitsClaimedThisPeriod?: IntFieldUpdateOperationsInput | number
    kitPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extraKits?: IntFieldUpdateOperationsInput | number
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    sellingPlatforms?: UserUpdatesellingPlatformsInput | string[]
    interestedNiches?: UserUpdateinterestedNichesInput | string[]
    primaryGoal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUncheckedCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateManyInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    slug: string
    description: string
    shortDescription: string
    image?: string | null
    isFreeProduct?: boolean
    totalLicenses?: number
    claimedLicenses?: number
    category?: string
    featured?: boolean
    difficulty?: $Enums.Difficulty
    sellingPlatforms?: ProductCreatesellingPlatformsInput | string[]
    languages?: ProductCreatelanguagesInput | string[]
    demandLabel?: string | null
    exclusiveLicensePrice?: number | null
    exclusiveLicenseSold?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    assets?: ProductAssetCreateNestedManyWithoutProductInput
    licenses?: UserLicenseCreateNestedManyWithoutProductInput
    savedBy?: SavedProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description: string
    shortDescription: string
    image?: string | null
    isFreeProduct?: boolean
    totalLicenses?: number
    claimedLicenses?: number
    category?: string
    featured?: boolean
    difficulty?: $Enums.Difficulty
    sellingPlatforms?: ProductCreatesellingPlatformsInput | string[]
    languages?: ProductCreatelanguagesInput | string[]
    demandLabel?: string | null
    exclusiveLicensePrice?: number | null
    exclusiveLicenseSold?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    assets?: ProductAssetUncheckedCreateNestedManyWithoutProductInput
    licenses?: UserLicenseUncheckedCreateNestedManyWithoutProductInput
    savedBy?: SavedProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isFreeProduct?: BoolFieldUpdateOperationsInput | boolean
    totalLicenses?: IntFieldUpdateOperationsInput | number
    claimedLicenses?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    sellingPlatforms?: ProductUpdatesellingPlatformsInput | string[]
    languages?: ProductUpdatelanguagesInput | string[]
    demandLabel?: NullableStringFieldUpdateOperationsInput | string | null
    exclusiveLicensePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    exclusiveLicenseSold?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assets?: ProductAssetUpdateManyWithoutProductNestedInput
    licenses?: UserLicenseUpdateManyWithoutProductNestedInput
    savedBy?: SavedProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isFreeProduct?: BoolFieldUpdateOperationsInput | boolean
    totalLicenses?: IntFieldUpdateOperationsInput | number
    claimedLicenses?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    sellingPlatforms?: ProductUpdatesellingPlatformsInput | string[]
    languages?: ProductUpdatelanguagesInput | string[]
    demandLabel?: NullableStringFieldUpdateOperationsInput | string | null
    exclusiveLicensePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    exclusiveLicenseSold?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assets?: ProductAssetUncheckedUpdateManyWithoutProductNestedInput
    licenses?: UserLicenseUncheckedUpdateManyWithoutProductNestedInput
    savedBy?: SavedProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    name: string
    slug: string
    description: string
    shortDescription: string
    image?: string | null
    isFreeProduct?: boolean
    totalLicenses?: number
    claimedLicenses?: number
    category?: string
    featured?: boolean
    difficulty?: $Enums.Difficulty
    sellingPlatforms?: ProductCreatesellingPlatformsInput | string[]
    languages?: ProductCreatelanguagesInput | string[]
    demandLabel?: string | null
    exclusiveLicensePrice?: number | null
    exclusiveLicenseSold?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isFreeProduct?: BoolFieldUpdateOperationsInput | boolean
    totalLicenses?: IntFieldUpdateOperationsInput | number
    claimedLicenses?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    sellingPlatforms?: ProductUpdatesellingPlatformsInput | string[]
    languages?: ProductUpdatelanguagesInput | string[]
    demandLabel?: NullableStringFieldUpdateOperationsInput | string | null
    exclusiveLicensePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    exclusiveLicenseSold?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isFreeProduct?: BoolFieldUpdateOperationsInput | boolean
    totalLicenses?: IntFieldUpdateOperationsInput | number
    claimedLicenses?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    sellingPlatforms?: ProductUpdatesellingPlatformsInput | string[]
    languages?: ProductUpdatelanguagesInput | string[]
    demandLabel?: NullableStringFieldUpdateOperationsInput | string | null
    exclusiveLicensePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    exclusiveLicenseSold?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductAssetCreateInput = {
    id?: string
    name: string
    type: string
    fileUrl: string
    fileSize?: string | null
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutAssetsInput
  }

  export type ProductAssetUncheckedCreateInput = {
    id?: string
    productId: string
    name: string
    type: string
    fileUrl: string
    fileSize?: string | null
    createdAt?: Date | string
  }

  export type ProductAssetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutAssetsNestedInput
  }

  export type ProductAssetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductAssetCreateManyInput = {
    id?: string
    productId: string
    name: string
    type: string
    fileUrl: string
    fileSize?: string | null
    createdAt?: Date | string
  }

  export type ProductAssetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductAssetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLicenseCreateInput = {
    id?: string
    licenseType?: $Enums.LicenseType
    claimedAt?: Date | string
    user: UserCreateNestedOneWithoutLicensesInput
    product: ProductCreateNestedOneWithoutLicensesInput
  }

  export type UserLicenseUncheckedCreateInput = {
    id?: string
    userId: string
    productId: string
    licenseType?: $Enums.LicenseType
    claimedAt?: Date | string
  }

  export type UserLicenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseType?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    claimedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLicensesNestedInput
    product?: ProductUpdateOneRequiredWithoutLicensesNestedInput
  }

  export type UserLicenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    licenseType?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    claimedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLicenseCreateManyInput = {
    id?: string
    userId: string
    productId: string
    licenseType?: $Enums.LicenseType
    claimedAt?: Date | string
  }

  export type UserLicenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseType?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    claimedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLicenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    licenseType?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    claimedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationCreateInput = {
    id?: string
    provider: string
    accessToken: string
    refreshToken?: string | null
    metadata?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutIntegrationsInput
  }

  export type IntegrationUncheckedCreateInput = {
    id?: string
    userId: string
    provider: string
    accessToken: string
    refreshToken?: string | null
    metadata?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntegrationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutIntegrationsNestedInput
  }

  export type IntegrationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationCreateManyInput = {
    id?: string
    userId: string
    provider: string
    accessToken: string
    refreshToken?: string | null
    metadata?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntegrationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratedContentCreateInput = {
    id?: string
    productName: string
    contentType: string
    tone: string
    platform?: string | null
    content: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutGeneratedContentInput
  }

  export type GeneratedContentUncheckedCreateInput = {
    id?: string
    userId: string
    productName: string
    contentType: string
    tone: string
    platform?: string | null
    content: string
    createdAt?: Date | string
  }

  export type GeneratedContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    tone?: StringFieldUpdateOperationsInput | string
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGeneratedContentNestedInput
  }

  export type GeneratedContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    tone?: StringFieldUpdateOperationsInput | string
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratedContentCreateManyInput = {
    id?: string
    userId: string
    productName: string
    contentType: string
    tone: string
    platform?: string | null
    content: string
    createdAt?: Date | string
  }

  export type GeneratedContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    tone?: StringFieldUpdateOperationsInput | string
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratedContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    tone?: StringFieldUpdateOperationsInput | string
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedProductCreateInput = {
    id?: string
    savedAt?: Date | string
    user: UserCreateNestedOneWithoutSavedProductsInput
    product: ProductCreateNestedOneWithoutSavedByInput
  }

  export type SavedProductUncheckedCreateInput = {
    id?: string
    userId: string
    productId: string
    savedAt?: Date | string
  }

  export type SavedProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSavedProductsNestedInput
    product?: ProductUpdateOneRequiredWithoutSavedByNestedInput
  }

  export type SavedProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedProductCreateManyInput = {
    id?: string
    userId: string
    productId: string
    savedAt?: Date | string
  }

  export type SavedProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type UserLicenseListRelationFilter = {
    every?: UserLicenseWhereInput
    some?: UserLicenseWhereInput
    none?: UserLicenseWhereInput
  }

  export type SavedProductListRelationFilter = {
    every?: SavedProductWhereInput
    some?: SavedProductWhereInput
    none?: SavedProductWhereInput
  }

  export type IntegrationListRelationFilter = {
    every?: IntegrationWhereInput
    some?: IntegrationWhereInput
    none?: IntegrationWhereInput
  }

  export type GeneratedContentListRelationFilter = {
    every?: GeneratedContentWhereInput
    some?: GeneratedContentWhereInput
    none?: GeneratedContentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserLicenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SavedProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IntegrationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GeneratedContentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    freeLicenseAvailable?: SortOrder
    kitsClaimedThisPeriod?: SortOrder
    kitPeriodStart?: SortOrder
    extraKits?: SortOrder
    onboardingCompleted?: SortOrder
    experienceLevel?: SortOrder
    sellingPlatforms?: SortOrder
    interestedNiches?: SortOrder
    primaryGoal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    freeLicenseAvailable?: SortOrder
    kitsClaimedThisPeriod?: SortOrder
    extraKits?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    freeLicenseAvailable?: SortOrder
    kitsClaimedThisPeriod?: SortOrder
    kitPeriodStart?: SortOrder
    extraKits?: SortOrder
    onboardingCompleted?: SortOrder
    experienceLevel?: SortOrder
    primaryGoal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    freeLicenseAvailable?: SortOrder
    kitsClaimedThisPeriod?: SortOrder
    kitPeriodStart?: SortOrder
    extraKits?: SortOrder
    onboardingCompleted?: SortOrder
    experienceLevel?: SortOrder
    primaryGoal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    freeLicenseAvailable?: SortOrder
    kitsClaimedThisPeriod?: SortOrder
    extraKits?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type EnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ProductAssetListRelationFilter = {
    every?: ProductAssetWhereInput
    some?: ProductAssetWhereInput
    none?: ProductAssetWhereInput
  }

  export type ProductAssetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    shortDescription?: SortOrder
    image?: SortOrder
    isFreeProduct?: SortOrder
    totalLicenses?: SortOrder
    claimedLicenses?: SortOrder
    category?: SortOrder
    featured?: SortOrder
    difficulty?: SortOrder
    sellingPlatforms?: SortOrder
    languages?: SortOrder
    demandLabel?: SortOrder
    exclusiveLicensePrice?: SortOrder
    exclusiveLicenseSold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    totalLicenses?: SortOrder
    claimedLicenses?: SortOrder
    exclusiveLicensePrice?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    shortDescription?: SortOrder
    image?: SortOrder
    isFreeProduct?: SortOrder
    totalLicenses?: SortOrder
    claimedLicenses?: SortOrder
    category?: SortOrder
    featured?: SortOrder
    difficulty?: SortOrder
    demandLabel?: SortOrder
    exclusiveLicensePrice?: SortOrder
    exclusiveLicenseSold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    shortDescription?: SortOrder
    image?: SortOrder
    isFreeProduct?: SortOrder
    totalLicenses?: SortOrder
    claimedLicenses?: SortOrder
    category?: SortOrder
    featured?: SortOrder
    difficulty?: SortOrder
    demandLabel?: SortOrder
    exclusiveLicensePrice?: SortOrder
    exclusiveLicenseSold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    totalLicenses?: SortOrder
    claimedLicenses?: SortOrder
    exclusiveLicensePrice?: SortOrder
  }

  export type EnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ProductAssetCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductAssetMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductAssetMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumLicenseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LicenseType | EnumLicenseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LicenseType[] | ListEnumLicenseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LicenseType[] | ListEnumLicenseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLicenseTypeFilter<$PrismaModel> | $Enums.LicenseType
  }

  export type UserLicenseUserIdProductIdCompoundUniqueInput = {
    userId: string
    productId: string
  }

  export type UserLicenseCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    licenseType?: SortOrder
    claimedAt?: SortOrder
  }

  export type UserLicenseMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    licenseType?: SortOrder
    claimedAt?: SortOrder
  }

  export type UserLicenseMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    licenseType?: SortOrder
    claimedAt?: SortOrder
  }

  export type EnumLicenseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LicenseType | EnumLicenseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LicenseType[] | ListEnumLicenseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LicenseType[] | ListEnumLicenseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLicenseTypeWithAggregatesFilter<$PrismaModel> | $Enums.LicenseType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLicenseTypeFilter<$PrismaModel>
    _max?: NestedEnumLicenseTypeFilter<$PrismaModel>
  }

  export type IntegrationUserIdProviderCompoundUniqueInput = {
    userId: string
    provider: string
  }

  export type IntegrationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    metadata?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntegrationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    metadata?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntegrationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    metadata?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GeneratedContentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productName?: SortOrder
    contentType?: SortOrder
    tone?: SortOrder
    platform?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type GeneratedContentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productName?: SortOrder
    contentType?: SortOrder
    tone?: SortOrder
    platform?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type GeneratedContentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productName?: SortOrder
    contentType?: SortOrder
    tone?: SortOrder
    platform?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedProductUserIdProductIdCompoundUniqueInput = {
    userId: string
    productId: string
  }

  export type SavedProductCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    savedAt?: SortOrder
  }

  export type SavedProductMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    savedAt?: SortOrder
  }

  export type SavedProductMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    savedAt?: SortOrder
  }

  export type UserCreatesellingPlatformsInput = {
    set: string[]
  }

  export type UserCreateinterestedNichesInput = {
    set: string[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type UserLicenseCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLicenseCreateWithoutUserInput, UserLicenseUncheckedCreateWithoutUserInput> | UserLicenseCreateWithoutUserInput[] | UserLicenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLicenseCreateOrConnectWithoutUserInput | UserLicenseCreateOrConnectWithoutUserInput[]
    createMany?: UserLicenseCreateManyUserInputEnvelope
    connect?: UserLicenseWhereUniqueInput | UserLicenseWhereUniqueInput[]
  }

  export type SavedProductCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedProductCreateWithoutUserInput, SavedProductUncheckedCreateWithoutUserInput> | SavedProductCreateWithoutUserInput[] | SavedProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedProductCreateOrConnectWithoutUserInput | SavedProductCreateOrConnectWithoutUserInput[]
    createMany?: SavedProductCreateManyUserInputEnvelope
    connect?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
  }

  export type IntegrationCreateNestedManyWithoutUserInput = {
    create?: XOR<IntegrationCreateWithoutUserInput, IntegrationUncheckedCreateWithoutUserInput> | IntegrationCreateWithoutUserInput[] | IntegrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IntegrationCreateOrConnectWithoutUserInput | IntegrationCreateOrConnectWithoutUserInput[]
    createMany?: IntegrationCreateManyUserInputEnvelope
    connect?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
  }

  export type GeneratedContentCreateNestedManyWithoutUserInput = {
    create?: XOR<GeneratedContentCreateWithoutUserInput, GeneratedContentUncheckedCreateWithoutUserInput> | GeneratedContentCreateWithoutUserInput[] | GeneratedContentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GeneratedContentCreateOrConnectWithoutUserInput | GeneratedContentCreateOrConnectWithoutUserInput[]
    createMany?: GeneratedContentCreateManyUserInputEnvelope
    connect?: GeneratedContentWhereUniqueInput | GeneratedContentWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type UserLicenseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLicenseCreateWithoutUserInput, UserLicenseUncheckedCreateWithoutUserInput> | UserLicenseCreateWithoutUserInput[] | UserLicenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLicenseCreateOrConnectWithoutUserInput | UserLicenseCreateOrConnectWithoutUserInput[]
    createMany?: UserLicenseCreateManyUserInputEnvelope
    connect?: UserLicenseWhereUniqueInput | UserLicenseWhereUniqueInput[]
  }

  export type SavedProductUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedProductCreateWithoutUserInput, SavedProductUncheckedCreateWithoutUserInput> | SavedProductCreateWithoutUserInput[] | SavedProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedProductCreateOrConnectWithoutUserInput | SavedProductCreateOrConnectWithoutUserInput[]
    createMany?: SavedProductCreateManyUserInputEnvelope
    connect?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
  }

  export type IntegrationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<IntegrationCreateWithoutUserInput, IntegrationUncheckedCreateWithoutUserInput> | IntegrationCreateWithoutUserInput[] | IntegrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IntegrationCreateOrConnectWithoutUserInput | IntegrationCreateOrConnectWithoutUserInput[]
    createMany?: IntegrationCreateManyUserInputEnvelope
    connect?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
  }

  export type GeneratedContentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GeneratedContentCreateWithoutUserInput, GeneratedContentUncheckedCreateWithoutUserInput> | GeneratedContentCreateWithoutUserInput[] | GeneratedContentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GeneratedContentCreateOrConnectWithoutUserInput | GeneratedContentCreateOrConnectWithoutUserInput[]
    createMany?: GeneratedContentCreateManyUserInputEnvelope
    connect?: GeneratedContentWhereUniqueInput | GeneratedContentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdatesellingPlatformsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateinterestedNichesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type PostUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCreatedByInput | PostUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCreatedByInput | PostUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCreatedByInput | PostUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type UserLicenseUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserLicenseCreateWithoutUserInput, UserLicenseUncheckedCreateWithoutUserInput> | UserLicenseCreateWithoutUserInput[] | UserLicenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLicenseCreateOrConnectWithoutUserInput | UserLicenseCreateOrConnectWithoutUserInput[]
    upsert?: UserLicenseUpsertWithWhereUniqueWithoutUserInput | UserLicenseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserLicenseCreateManyUserInputEnvelope
    set?: UserLicenseWhereUniqueInput | UserLicenseWhereUniqueInput[]
    disconnect?: UserLicenseWhereUniqueInput | UserLicenseWhereUniqueInput[]
    delete?: UserLicenseWhereUniqueInput | UserLicenseWhereUniqueInput[]
    connect?: UserLicenseWhereUniqueInput | UserLicenseWhereUniqueInput[]
    update?: UserLicenseUpdateWithWhereUniqueWithoutUserInput | UserLicenseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserLicenseUpdateManyWithWhereWithoutUserInput | UserLicenseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserLicenseScalarWhereInput | UserLicenseScalarWhereInput[]
  }

  export type SavedProductUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedProductCreateWithoutUserInput, SavedProductUncheckedCreateWithoutUserInput> | SavedProductCreateWithoutUserInput[] | SavedProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedProductCreateOrConnectWithoutUserInput | SavedProductCreateOrConnectWithoutUserInput[]
    upsert?: SavedProductUpsertWithWhereUniqueWithoutUserInput | SavedProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedProductCreateManyUserInputEnvelope
    set?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    disconnect?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    delete?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    connect?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    update?: SavedProductUpdateWithWhereUniqueWithoutUserInput | SavedProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedProductUpdateManyWithWhereWithoutUserInput | SavedProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedProductScalarWhereInput | SavedProductScalarWhereInput[]
  }

  export type IntegrationUpdateManyWithoutUserNestedInput = {
    create?: XOR<IntegrationCreateWithoutUserInput, IntegrationUncheckedCreateWithoutUserInput> | IntegrationCreateWithoutUserInput[] | IntegrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IntegrationCreateOrConnectWithoutUserInput | IntegrationCreateOrConnectWithoutUserInput[]
    upsert?: IntegrationUpsertWithWhereUniqueWithoutUserInput | IntegrationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IntegrationCreateManyUserInputEnvelope
    set?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    disconnect?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    delete?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    connect?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    update?: IntegrationUpdateWithWhereUniqueWithoutUserInput | IntegrationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IntegrationUpdateManyWithWhereWithoutUserInput | IntegrationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IntegrationScalarWhereInput | IntegrationScalarWhereInput[]
  }

  export type GeneratedContentUpdateManyWithoutUserNestedInput = {
    create?: XOR<GeneratedContentCreateWithoutUserInput, GeneratedContentUncheckedCreateWithoutUserInput> | GeneratedContentCreateWithoutUserInput[] | GeneratedContentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GeneratedContentCreateOrConnectWithoutUserInput | GeneratedContentCreateOrConnectWithoutUserInput[]
    upsert?: GeneratedContentUpsertWithWhereUniqueWithoutUserInput | GeneratedContentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GeneratedContentCreateManyUserInputEnvelope
    set?: GeneratedContentWhereUniqueInput | GeneratedContentWhereUniqueInput[]
    disconnect?: GeneratedContentWhereUniqueInput | GeneratedContentWhereUniqueInput[]
    delete?: GeneratedContentWhereUniqueInput | GeneratedContentWhereUniqueInput[]
    connect?: GeneratedContentWhereUniqueInput | GeneratedContentWhereUniqueInput[]
    update?: GeneratedContentUpdateWithWhereUniqueWithoutUserInput | GeneratedContentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GeneratedContentUpdateManyWithWhereWithoutUserInput | GeneratedContentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GeneratedContentScalarWhereInput | GeneratedContentScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCreatedByInput | PostUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCreatedByInput | PostUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCreatedByInput | PostUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type UserLicenseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserLicenseCreateWithoutUserInput, UserLicenseUncheckedCreateWithoutUserInput> | UserLicenseCreateWithoutUserInput[] | UserLicenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLicenseCreateOrConnectWithoutUserInput | UserLicenseCreateOrConnectWithoutUserInput[]
    upsert?: UserLicenseUpsertWithWhereUniqueWithoutUserInput | UserLicenseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserLicenseCreateManyUserInputEnvelope
    set?: UserLicenseWhereUniqueInput | UserLicenseWhereUniqueInput[]
    disconnect?: UserLicenseWhereUniqueInput | UserLicenseWhereUniqueInput[]
    delete?: UserLicenseWhereUniqueInput | UserLicenseWhereUniqueInput[]
    connect?: UserLicenseWhereUniqueInput | UserLicenseWhereUniqueInput[]
    update?: UserLicenseUpdateWithWhereUniqueWithoutUserInput | UserLicenseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserLicenseUpdateManyWithWhereWithoutUserInput | UserLicenseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserLicenseScalarWhereInput | UserLicenseScalarWhereInput[]
  }

  export type SavedProductUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedProductCreateWithoutUserInput, SavedProductUncheckedCreateWithoutUserInput> | SavedProductCreateWithoutUserInput[] | SavedProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedProductCreateOrConnectWithoutUserInput | SavedProductCreateOrConnectWithoutUserInput[]
    upsert?: SavedProductUpsertWithWhereUniqueWithoutUserInput | SavedProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedProductCreateManyUserInputEnvelope
    set?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    disconnect?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    delete?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    connect?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    update?: SavedProductUpdateWithWhereUniqueWithoutUserInput | SavedProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedProductUpdateManyWithWhereWithoutUserInput | SavedProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedProductScalarWhereInput | SavedProductScalarWhereInput[]
  }

  export type IntegrationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<IntegrationCreateWithoutUserInput, IntegrationUncheckedCreateWithoutUserInput> | IntegrationCreateWithoutUserInput[] | IntegrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IntegrationCreateOrConnectWithoutUserInput | IntegrationCreateOrConnectWithoutUserInput[]
    upsert?: IntegrationUpsertWithWhereUniqueWithoutUserInput | IntegrationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IntegrationCreateManyUserInputEnvelope
    set?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    disconnect?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    delete?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    connect?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    update?: IntegrationUpdateWithWhereUniqueWithoutUserInput | IntegrationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IntegrationUpdateManyWithWhereWithoutUserInput | IntegrationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IntegrationScalarWhereInput | IntegrationScalarWhereInput[]
  }

  export type GeneratedContentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GeneratedContentCreateWithoutUserInput, GeneratedContentUncheckedCreateWithoutUserInput> | GeneratedContentCreateWithoutUserInput[] | GeneratedContentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GeneratedContentCreateOrConnectWithoutUserInput | GeneratedContentCreateOrConnectWithoutUserInput[]
    upsert?: GeneratedContentUpsertWithWhereUniqueWithoutUserInput | GeneratedContentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GeneratedContentCreateManyUserInputEnvelope
    set?: GeneratedContentWhereUniqueInput | GeneratedContentWhereUniqueInput[]
    disconnect?: GeneratedContentWhereUniqueInput | GeneratedContentWhereUniqueInput[]
    delete?: GeneratedContentWhereUniqueInput | GeneratedContentWhereUniqueInput[]
    connect?: GeneratedContentWhereUniqueInput | GeneratedContentWhereUniqueInput[]
    update?: GeneratedContentUpdateWithWhereUniqueWithoutUserInput | GeneratedContentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GeneratedContentUpdateManyWithWhereWithoutUserInput | GeneratedContentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GeneratedContentScalarWhereInput | GeneratedContentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type ProductCreatesellingPlatformsInput = {
    set: string[]
  }

  export type ProductCreatelanguagesInput = {
    set: string[]
  }

  export type ProductAssetCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductAssetCreateWithoutProductInput, ProductAssetUncheckedCreateWithoutProductInput> | ProductAssetCreateWithoutProductInput[] | ProductAssetUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductAssetCreateOrConnectWithoutProductInput | ProductAssetCreateOrConnectWithoutProductInput[]
    createMany?: ProductAssetCreateManyProductInputEnvelope
    connect?: ProductAssetWhereUniqueInput | ProductAssetWhereUniqueInput[]
  }

  export type UserLicenseCreateNestedManyWithoutProductInput = {
    create?: XOR<UserLicenseCreateWithoutProductInput, UserLicenseUncheckedCreateWithoutProductInput> | UserLicenseCreateWithoutProductInput[] | UserLicenseUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserLicenseCreateOrConnectWithoutProductInput | UserLicenseCreateOrConnectWithoutProductInput[]
    createMany?: UserLicenseCreateManyProductInputEnvelope
    connect?: UserLicenseWhereUniqueInput | UserLicenseWhereUniqueInput[]
  }

  export type SavedProductCreateNestedManyWithoutProductInput = {
    create?: XOR<SavedProductCreateWithoutProductInput, SavedProductUncheckedCreateWithoutProductInput> | SavedProductCreateWithoutProductInput[] | SavedProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SavedProductCreateOrConnectWithoutProductInput | SavedProductCreateOrConnectWithoutProductInput[]
    createMany?: SavedProductCreateManyProductInputEnvelope
    connect?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
  }

  export type ProductAssetUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductAssetCreateWithoutProductInput, ProductAssetUncheckedCreateWithoutProductInput> | ProductAssetCreateWithoutProductInput[] | ProductAssetUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductAssetCreateOrConnectWithoutProductInput | ProductAssetCreateOrConnectWithoutProductInput[]
    createMany?: ProductAssetCreateManyProductInputEnvelope
    connect?: ProductAssetWhereUniqueInput | ProductAssetWhereUniqueInput[]
  }

  export type UserLicenseUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<UserLicenseCreateWithoutProductInput, UserLicenseUncheckedCreateWithoutProductInput> | UserLicenseCreateWithoutProductInput[] | UserLicenseUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserLicenseCreateOrConnectWithoutProductInput | UserLicenseCreateOrConnectWithoutProductInput[]
    createMany?: UserLicenseCreateManyProductInputEnvelope
    connect?: UserLicenseWhereUniqueInput | UserLicenseWhereUniqueInput[]
  }

  export type SavedProductUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<SavedProductCreateWithoutProductInput, SavedProductUncheckedCreateWithoutProductInput> | SavedProductCreateWithoutProductInput[] | SavedProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SavedProductCreateOrConnectWithoutProductInput | SavedProductCreateOrConnectWithoutProductInput[]
    createMany?: SavedProductCreateManyProductInputEnvelope
    connect?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
  }

  export type EnumDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.Difficulty
  }

  export type ProductUpdatesellingPlatformsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProductUpdatelanguagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductAssetUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductAssetCreateWithoutProductInput, ProductAssetUncheckedCreateWithoutProductInput> | ProductAssetCreateWithoutProductInput[] | ProductAssetUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductAssetCreateOrConnectWithoutProductInput | ProductAssetCreateOrConnectWithoutProductInput[]
    upsert?: ProductAssetUpsertWithWhereUniqueWithoutProductInput | ProductAssetUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductAssetCreateManyProductInputEnvelope
    set?: ProductAssetWhereUniqueInput | ProductAssetWhereUniqueInput[]
    disconnect?: ProductAssetWhereUniqueInput | ProductAssetWhereUniqueInput[]
    delete?: ProductAssetWhereUniqueInput | ProductAssetWhereUniqueInput[]
    connect?: ProductAssetWhereUniqueInput | ProductAssetWhereUniqueInput[]
    update?: ProductAssetUpdateWithWhereUniqueWithoutProductInput | ProductAssetUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductAssetUpdateManyWithWhereWithoutProductInput | ProductAssetUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductAssetScalarWhereInput | ProductAssetScalarWhereInput[]
  }

  export type UserLicenseUpdateManyWithoutProductNestedInput = {
    create?: XOR<UserLicenseCreateWithoutProductInput, UserLicenseUncheckedCreateWithoutProductInput> | UserLicenseCreateWithoutProductInput[] | UserLicenseUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserLicenseCreateOrConnectWithoutProductInput | UserLicenseCreateOrConnectWithoutProductInput[]
    upsert?: UserLicenseUpsertWithWhereUniqueWithoutProductInput | UserLicenseUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: UserLicenseCreateManyProductInputEnvelope
    set?: UserLicenseWhereUniqueInput | UserLicenseWhereUniqueInput[]
    disconnect?: UserLicenseWhereUniqueInput | UserLicenseWhereUniqueInput[]
    delete?: UserLicenseWhereUniqueInput | UserLicenseWhereUniqueInput[]
    connect?: UserLicenseWhereUniqueInput | UserLicenseWhereUniqueInput[]
    update?: UserLicenseUpdateWithWhereUniqueWithoutProductInput | UserLicenseUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: UserLicenseUpdateManyWithWhereWithoutProductInput | UserLicenseUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: UserLicenseScalarWhereInput | UserLicenseScalarWhereInput[]
  }

  export type SavedProductUpdateManyWithoutProductNestedInput = {
    create?: XOR<SavedProductCreateWithoutProductInput, SavedProductUncheckedCreateWithoutProductInput> | SavedProductCreateWithoutProductInput[] | SavedProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SavedProductCreateOrConnectWithoutProductInput | SavedProductCreateOrConnectWithoutProductInput[]
    upsert?: SavedProductUpsertWithWhereUniqueWithoutProductInput | SavedProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: SavedProductCreateManyProductInputEnvelope
    set?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    disconnect?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    delete?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    connect?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    update?: SavedProductUpdateWithWhereUniqueWithoutProductInput | SavedProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: SavedProductUpdateManyWithWhereWithoutProductInput | SavedProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: SavedProductScalarWhereInput | SavedProductScalarWhereInput[]
  }

  export type ProductAssetUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductAssetCreateWithoutProductInput, ProductAssetUncheckedCreateWithoutProductInput> | ProductAssetCreateWithoutProductInput[] | ProductAssetUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductAssetCreateOrConnectWithoutProductInput | ProductAssetCreateOrConnectWithoutProductInput[]
    upsert?: ProductAssetUpsertWithWhereUniqueWithoutProductInput | ProductAssetUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductAssetCreateManyProductInputEnvelope
    set?: ProductAssetWhereUniqueInput | ProductAssetWhereUniqueInput[]
    disconnect?: ProductAssetWhereUniqueInput | ProductAssetWhereUniqueInput[]
    delete?: ProductAssetWhereUniqueInput | ProductAssetWhereUniqueInput[]
    connect?: ProductAssetWhereUniqueInput | ProductAssetWhereUniqueInput[]
    update?: ProductAssetUpdateWithWhereUniqueWithoutProductInput | ProductAssetUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductAssetUpdateManyWithWhereWithoutProductInput | ProductAssetUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductAssetScalarWhereInput | ProductAssetScalarWhereInput[]
  }

  export type UserLicenseUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<UserLicenseCreateWithoutProductInput, UserLicenseUncheckedCreateWithoutProductInput> | UserLicenseCreateWithoutProductInput[] | UserLicenseUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserLicenseCreateOrConnectWithoutProductInput | UserLicenseCreateOrConnectWithoutProductInput[]
    upsert?: UserLicenseUpsertWithWhereUniqueWithoutProductInput | UserLicenseUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: UserLicenseCreateManyProductInputEnvelope
    set?: UserLicenseWhereUniqueInput | UserLicenseWhereUniqueInput[]
    disconnect?: UserLicenseWhereUniqueInput | UserLicenseWhereUniqueInput[]
    delete?: UserLicenseWhereUniqueInput | UserLicenseWhereUniqueInput[]
    connect?: UserLicenseWhereUniqueInput | UserLicenseWhereUniqueInput[]
    update?: UserLicenseUpdateWithWhereUniqueWithoutProductInput | UserLicenseUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: UserLicenseUpdateManyWithWhereWithoutProductInput | UserLicenseUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: UserLicenseScalarWhereInput | UserLicenseScalarWhereInput[]
  }

  export type SavedProductUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<SavedProductCreateWithoutProductInput, SavedProductUncheckedCreateWithoutProductInput> | SavedProductCreateWithoutProductInput[] | SavedProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SavedProductCreateOrConnectWithoutProductInput | SavedProductCreateOrConnectWithoutProductInput[]
    upsert?: SavedProductUpsertWithWhereUniqueWithoutProductInput | SavedProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: SavedProductCreateManyProductInputEnvelope
    set?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    disconnect?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    delete?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    connect?: SavedProductWhereUniqueInput | SavedProductWhereUniqueInput[]
    update?: SavedProductUpdateWithWhereUniqueWithoutProductInput | SavedProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: SavedProductUpdateManyWithWhereWithoutProductInput | SavedProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: SavedProductScalarWhereInput | SavedProductScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutAssetsInput = {
    create?: XOR<ProductCreateWithoutAssetsInput, ProductUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutAssetsInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutAssetsNestedInput = {
    create?: XOR<ProductCreateWithoutAssetsInput, ProductUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutAssetsInput
    upsert?: ProductUpsertWithoutAssetsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutAssetsInput, ProductUpdateWithoutAssetsInput>, ProductUncheckedUpdateWithoutAssetsInput>
  }

  export type UserCreateNestedOneWithoutLicensesInput = {
    create?: XOR<UserCreateWithoutLicensesInput, UserUncheckedCreateWithoutLicensesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLicensesInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutLicensesInput = {
    create?: XOR<ProductCreateWithoutLicensesInput, ProductUncheckedCreateWithoutLicensesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutLicensesInput
    connect?: ProductWhereUniqueInput
  }

  export type EnumLicenseTypeFieldUpdateOperationsInput = {
    set?: $Enums.LicenseType
  }

  export type UserUpdateOneRequiredWithoutLicensesNestedInput = {
    create?: XOR<UserCreateWithoutLicensesInput, UserUncheckedCreateWithoutLicensesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLicensesInput
    upsert?: UserUpsertWithoutLicensesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLicensesInput, UserUpdateWithoutLicensesInput>, UserUncheckedUpdateWithoutLicensesInput>
  }

  export type ProductUpdateOneRequiredWithoutLicensesNestedInput = {
    create?: XOR<ProductCreateWithoutLicensesInput, ProductUncheckedCreateWithoutLicensesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutLicensesInput
    upsert?: ProductUpsertWithoutLicensesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutLicensesInput, ProductUpdateWithoutLicensesInput>, ProductUncheckedUpdateWithoutLicensesInput>
  }

  export type UserCreateNestedOneWithoutIntegrationsInput = {
    create?: XOR<UserCreateWithoutIntegrationsInput, UserUncheckedCreateWithoutIntegrationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutIntegrationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutIntegrationsNestedInput = {
    create?: XOR<UserCreateWithoutIntegrationsInput, UserUncheckedCreateWithoutIntegrationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutIntegrationsInput
    upsert?: UserUpsertWithoutIntegrationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIntegrationsInput, UserUpdateWithoutIntegrationsInput>, UserUncheckedUpdateWithoutIntegrationsInput>
  }

  export type UserCreateNestedOneWithoutGeneratedContentInput = {
    create?: XOR<UserCreateWithoutGeneratedContentInput, UserUncheckedCreateWithoutGeneratedContentInput>
    connectOrCreate?: UserCreateOrConnectWithoutGeneratedContentInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutGeneratedContentNestedInput = {
    create?: XOR<UserCreateWithoutGeneratedContentInput, UserUncheckedCreateWithoutGeneratedContentInput>
    connectOrCreate?: UserCreateOrConnectWithoutGeneratedContentInput
    upsert?: UserUpsertWithoutGeneratedContentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGeneratedContentInput, UserUpdateWithoutGeneratedContentInput>, UserUncheckedUpdateWithoutGeneratedContentInput>
  }

  export type UserCreateNestedOneWithoutSavedProductsInput = {
    create?: XOR<UserCreateWithoutSavedProductsInput, UserUncheckedCreateWithoutSavedProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedProductsInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutSavedByInput = {
    create?: XOR<ProductCreateWithoutSavedByInput, ProductUncheckedCreateWithoutSavedByInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSavedByInput
    connect?: ProductWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSavedProductsNestedInput = {
    create?: XOR<UserCreateWithoutSavedProductsInput, UserUncheckedCreateWithoutSavedProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedProductsInput
    upsert?: UserUpsertWithoutSavedProductsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSavedProductsInput, UserUpdateWithoutSavedProductsInput>, UserUncheckedUpdateWithoutSavedProductsInput>
  }

  export type ProductUpdateOneRequiredWithoutSavedByNestedInput = {
    create?: XOR<ProductCreateWithoutSavedByInput, ProductUncheckedCreateWithoutSavedByInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSavedByInput
    upsert?: ProductUpsertWithoutSavedByInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutSavedByInput, ProductUpdateWithoutSavedByInput>, ProductUncheckedUpdateWithoutSavedByInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedEnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumLicenseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LicenseType | EnumLicenseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LicenseType[] | ListEnumLicenseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LicenseType[] | ListEnumLicenseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLicenseTypeFilter<$PrismaModel> | $Enums.LicenseType
  }

  export type NestedEnumLicenseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LicenseType | EnumLicenseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LicenseType[] | ListEnumLicenseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LicenseType[] | ListEnumLicenseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLicenseTypeWithAggregatesFilter<$PrismaModel> | $Enums.LicenseType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLicenseTypeFilter<$PrismaModel>
    _max?: NestedEnumLicenseTypeFilter<$PrismaModel>
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutCreatedByInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUncheckedCreateWithoutCreatedByInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateOrConnectWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput>
  }

  export type PostCreateManyCreatedByInputEnvelope = {
    data: PostCreateManyCreatedByInput | PostCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type UserLicenseCreateWithoutUserInput = {
    id?: string
    licenseType?: $Enums.LicenseType
    claimedAt?: Date | string
    product: ProductCreateNestedOneWithoutLicensesInput
  }

  export type UserLicenseUncheckedCreateWithoutUserInput = {
    id?: string
    productId: string
    licenseType?: $Enums.LicenseType
    claimedAt?: Date | string
  }

  export type UserLicenseCreateOrConnectWithoutUserInput = {
    where: UserLicenseWhereUniqueInput
    create: XOR<UserLicenseCreateWithoutUserInput, UserLicenseUncheckedCreateWithoutUserInput>
  }

  export type UserLicenseCreateManyUserInputEnvelope = {
    data: UserLicenseCreateManyUserInput | UserLicenseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SavedProductCreateWithoutUserInput = {
    id?: string
    savedAt?: Date | string
    product: ProductCreateNestedOneWithoutSavedByInput
  }

  export type SavedProductUncheckedCreateWithoutUserInput = {
    id?: string
    productId: string
    savedAt?: Date | string
  }

  export type SavedProductCreateOrConnectWithoutUserInput = {
    where: SavedProductWhereUniqueInput
    create: XOR<SavedProductCreateWithoutUserInput, SavedProductUncheckedCreateWithoutUserInput>
  }

  export type SavedProductCreateManyUserInputEnvelope = {
    data: SavedProductCreateManyUserInput | SavedProductCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type IntegrationCreateWithoutUserInput = {
    id?: string
    provider: string
    accessToken: string
    refreshToken?: string | null
    metadata?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntegrationUncheckedCreateWithoutUserInput = {
    id?: string
    provider: string
    accessToken: string
    refreshToken?: string | null
    metadata?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntegrationCreateOrConnectWithoutUserInput = {
    where: IntegrationWhereUniqueInput
    create: XOR<IntegrationCreateWithoutUserInput, IntegrationUncheckedCreateWithoutUserInput>
  }

  export type IntegrationCreateManyUserInputEnvelope = {
    data: IntegrationCreateManyUserInput | IntegrationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GeneratedContentCreateWithoutUserInput = {
    id?: string
    productName: string
    contentType: string
    tone: string
    platform?: string | null
    content: string
    createdAt?: Date | string
  }

  export type GeneratedContentUncheckedCreateWithoutUserInput = {
    id?: string
    productName: string
    contentType: string
    tone: string
    platform?: string | null
    content: string
    createdAt?: Date | string
  }

  export type GeneratedContentCreateOrConnectWithoutUserInput = {
    where: GeneratedContentWhereUniqueInput
    create: XOR<GeneratedContentCreateWithoutUserInput, GeneratedContentUncheckedCreateWithoutUserInput>
  }

  export type GeneratedContentCreateManyUserInputEnvelope = {
    data: GeneratedContentCreateManyUserInput | GeneratedContentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type PostUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutCreatedByInput, PostUncheckedUpdateWithoutCreatedByInput>
    create: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput>
  }

  export type PostUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutCreatedByInput, PostUncheckedUpdateWithoutCreatedByInput>
  }

  export type PostUpdateManyWithWhereWithoutCreatedByInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdById?: StringFilter<"Post"> | string
  }

  export type UserLicenseUpsertWithWhereUniqueWithoutUserInput = {
    where: UserLicenseWhereUniqueInput
    update: XOR<UserLicenseUpdateWithoutUserInput, UserLicenseUncheckedUpdateWithoutUserInput>
    create: XOR<UserLicenseCreateWithoutUserInput, UserLicenseUncheckedCreateWithoutUserInput>
  }

  export type UserLicenseUpdateWithWhereUniqueWithoutUserInput = {
    where: UserLicenseWhereUniqueInput
    data: XOR<UserLicenseUpdateWithoutUserInput, UserLicenseUncheckedUpdateWithoutUserInput>
  }

  export type UserLicenseUpdateManyWithWhereWithoutUserInput = {
    where: UserLicenseScalarWhereInput
    data: XOR<UserLicenseUpdateManyMutationInput, UserLicenseUncheckedUpdateManyWithoutUserInput>
  }

  export type UserLicenseScalarWhereInput = {
    AND?: UserLicenseScalarWhereInput | UserLicenseScalarWhereInput[]
    OR?: UserLicenseScalarWhereInput[]
    NOT?: UserLicenseScalarWhereInput | UserLicenseScalarWhereInput[]
    id?: StringFilter<"UserLicense"> | string
    userId?: StringFilter<"UserLicense"> | string
    productId?: StringFilter<"UserLicense"> | string
    licenseType?: EnumLicenseTypeFilter<"UserLicense"> | $Enums.LicenseType
    claimedAt?: DateTimeFilter<"UserLicense"> | Date | string
  }

  export type SavedProductUpsertWithWhereUniqueWithoutUserInput = {
    where: SavedProductWhereUniqueInput
    update: XOR<SavedProductUpdateWithoutUserInput, SavedProductUncheckedUpdateWithoutUserInput>
    create: XOR<SavedProductCreateWithoutUserInput, SavedProductUncheckedCreateWithoutUserInput>
  }

  export type SavedProductUpdateWithWhereUniqueWithoutUserInput = {
    where: SavedProductWhereUniqueInput
    data: XOR<SavedProductUpdateWithoutUserInput, SavedProductUncheckedUpdateWithoutUserInput>
  }

  export type SavedProductUpdateManyWithWhereWithoutUserInput = {
    where: SavedProductScalarWhereInput
    data: XOR<SavedProductUpdateManyMutationInput, SavedProductUncheckedUpdateManyWithoutUserInput>
  }

  export type SavedProductScalarWhereInput = {
    AND?: SavedProductScalarWhereInput | SavedProductScalarWhereInput[]
    OR?: SavedProductScalarWhereInput[]
    NOT?: SavedProductScalarWhereInput | SavedProductScalarWhereInput[]
    id?: StringFilter<"SavedProduct"> | string
    userId?: StringFilter<"SavedProduct"> | string
    productId?: StringFilter<"SavedProduct"> | string
    savedAt?: DateTimeFilter<"SavedProduct"> | Date | string
  }

  export type IntegrationUpsertWithWhereUniqueWithoutUserInput = {
    where: IntegrationWhereUniqueInput
    update: XOR<IntegrationUpdateWithoutUserInput, IntegrationUncheckedUpdateWithoutUserInput>
    create: XOR<IntegrationCreateWithoutUserInput, IntegrationUncheckedCreateWithoutUserInput>
  }

  export type IntegrationUpdateWithWhereUniqueWithoutUserInput = {
    where: IntegrationWhereUniqueInput
    data: XOR<IntegrationUpdateWithoutUserInput, IntegrationUncheckedUpdateWithoutUserInput>
  }

  export type IntegrationUpdateManyWithWhereWithoutUserInput = {
    where: IntegrationScalarWhereInput
    data: XOR<IntegrationUpdateManyMutationInput, IntegrationUncheckedUpdateManyWithoutUserInput>
  }

  export type IntegrationScalarWhereInput = {
    AND?: IntegrationScalarWhereInput | IntegrationScalarWhereInput[]
    OR?: IntegrationScalarWhereInput[]
    NOT?: IntegrationScalarWhereInput | IntegrationScalarWhereInput[]
    id?: StringFilter<"Integration"> | string
    userId?: StringFilter<"Integration"> | string
    provider?: StringFilter<"Integration"> | string
    accessToken?: StringFilter<"Integration"> | string
    refreshToken?: StringNullableFilter<"Integration"> | string | null
    metadata?: StringNullableFilter<"Integration"> | string | null
    expiresAt?: DateTimeNullableFilter<"Integration"> | Date | string | null
    createdAt?: DateTimeFilter<"Integration"> | Date | string
    updatedAt?: DateTimeFilter<"Integration"> | Date | string
  }

  export type GeneratedContentUpsertWithWhereUniqueWithoutUserInput = {
    where: GeneratedContentWhereUniqueInput
    update: XOR<GeneratedContentUpdateWithoutUserInput, GeneratedContentUncheckedUpdateWithoutUserInput>
    create: XOR<GeneratedContentCreateWithoutUserInput, GeneratedContentUncheckedCreateWithoutUserInput>
  }

  export type GeneratedContentUpdateWithWhereUniqueWithoutUserInput = {
    where: GeneratedContentWhereUniqueInput
    data: XOR<GeneratedContentUpdateWithoutUserInput, GeneratedContentUncheckedUpdateWithoutUserInput>
  }

  export type GeneratedContentUpdateManyWithWhereWithoutUserInput = {
    where: GeneratedContentScalarWhereInput
    data: XOR<GeneratedContentUpdateManyMutationInput, GeneratedContentUncheckedUpdateManyWithoutUserInput>
  }

  export type GeneratedContentScalarWhereInput = {
    AND?: GeneratedContentScalarWhereInput | GeneratedContentScalarWhereInput[]
    OR?: GeneratedContentScalarWhereInput[]
    NOT?: GeneratedContentScalarWhereInput | GeneratedContentScalarWhereInput[]
    id?: StringFilter<"GeneratedContent"> | string
    userId?: StringFilter<"GeneratedContent"> | string
    productName?: StringFilter<"GeneratedContent"> | string
    contentType?: StringFilter<"GeneratedContent"> | string
    tone?: StringFilter<"GeneratedContent"> | string
    platform?: StringNullableFilter<"GeneratedContent"> | string | null
    content?: StringFilter<"GeneratedContent"> | string
    createdAt?: DateTimeFilter<"GeneratedContent"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    role?: $Enums.UserRole
    freeLicenseAvailable?: number
    kitsClaimedThisPeriod?: number
    kitPeriodStart?: Date | string | null
    extraKits?: number
    onboardingCompleted?: boolean
    experienceLevel?: string | null
    sellingPlatforms?: UserCreatesellingPlatformsInput | string[]
    interestedNiches?: UserCreateinterestedNichesInput | string[]
    primaryGoal?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    licenses?: UserLicenseCreateNestedManyWithoutUserInput
    savedProducts?: SavedProductCreateNestedManyWithoutUserInput
    integrations?: IntegrationCreateNestedManyWithoutUserInput
    generatedContent?: GeneratedContentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    role?: $Enums.UserRole
    freeLicenseAvailable?: number
    kitsClaimedThisPeriod?: number
    kitPeriodStart?: Date | string | null
    extraKits?: number
    onboardingCompleted?: boolean
    experienceLevel?: string | null
    sellingPlatforms?: UserCreatesellingPlatformsInput | string[]
    interestedNiches?: UserCreateinterestedNichesInput | string[]
    primaryGoal?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    licenses?: UserLicenseUncheckedCreateNestedManyWithoutUserInput
    savedProducts?: SavedProductUncheckedCreateNestedManyWithoutUserInput
    integrations?: IntegrationUncheckedCreateNestedManyWithoutUserInput
    generatedContent?: GeneratedContentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    freeLicenseAvailable?: IntFieldUpdateOperationsInput | number
    kitsClaimedThisPeriod?: IntFieldUpdateOperationsInput | number
    kitPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extraKits?: IntFieldUpdateOperationsInput | number
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    sellingPlatforms?: UserUpdatesellingPlatformsInput | string[]
    interestedNiches?: UserUpdateinterestedNichesInput | string[]
    primaryGoal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    licenses?: UserLicenseUpdateManyWithoutUserNestedInput
    savedProducts?: SavedProductUpdateManyWithoutUserNestedInput
    integrations?: IntegrationUpdateManyWithoutUserNestedInput
    generatedContent?: GeneratedContentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    freeLicenseAvailable?: IntFieldUpdateOperationsInput | number
    kitsClaimedThisPeriod?: IntFieldUpdateOperationsInput | number
    kitPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extraKits?: IntFieldUpdateOperationsInput | number
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    sellingPlatforms?: UserUpdatesellingPlatformsInput | string[]
    interestedNiches?: UserUpdateinterestedNichesInput | string[]
    primaryGoal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    licenses?: UserLicenseUncheckedUpdateManyWithoutUserNestedInput
    savedProducts?: SavedProductUncheckedUpdateManyWithoutUserNestedInput
    integrations?: IntegrationUncheckedUpdateManyWithoutUserNestedInput
    generatedContent?: GeneratedContentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    role?: $Enums.UserRole
    freeLicenseAvailable?: number
    kitsClaimedThisPeriod?: number
    kitPeriodStart?: Date | string | null
    extraKits?: number
    onboardingCompleted?: boolean
    experienceLevel?: string | null
    sellingPlatforms?: UserCreatesellingPlatformsInput | string[]
    interestedNiches?: UserCreateinterestedNichesInput | string[]
    primaryGoal?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    licenses?: UserLicenseCreateNestedManyWithoutUserInput
    savedProducts?: SavedProductCreateNestedManyWithoutUserInput
    integrations?: IntegrationCreateNestedManyWithoutUserInput
    generatedContent?: GeneratedContentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    role?: $Enums.UserRole
    freeLicenseAvailable?: number
    kitsClaimedThisPeriod?: number
    kitPeriodStart?: Date | string | null
    extraKits?: number
    onboardingCompleted?: boolean
    experienceLevel?: string | null
    sellingPlatforms?: UserCreatesellingPlatformsInput | string[]
    interestedNiches?: UserCreateinterestedNichesInput | string[]
    primaryGoal?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    licenses?: UserLicenseUncheckedCreateNestedManyWithoutUserInput
    savedProducts?: SavedProductUncheckedCreateNestedManyWithoutUserInput
    integrations?: IntegrationUncheckedCreateNestedManyWithoutUserInput
    generatedContent?: GeneratedContentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    freeLicenseAvailable?: IntFieldUpdateOperationsInput | number
    kitsClaimedThisPeriod?: IntFieldUpdateOperationsInput | number
    kitPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extraKits?: IntFieldUpdateOperationsInput | number
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    sellingPlatforms?: UserUpdatesellingPlatformsInput | string[]
    interestedNiches?: UserUpdateinterestedNichesInput | string[]
    primaryGoal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    licenses?: UserLicenseUpdateManyWithoutUserNestedInput
    savedProducts?: SavedProductUpdateManyWithoutUserNestedInput
    integrations?: IntegrationUpdateManyWithoutUserNestedInput
    generatedContent?: GeneratedContentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    freeLicenseAvailable?: IntFieldUpdateOperationsInput | number
    kitsClaimedThisPeriod?: IntFieldUpdateOperationsInput | number
    kitPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extraKits?: IntFieldUpdateOperationsInput | number
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    sellingPlatforms?: UserUpdatesellingPlatformsInput | string[]
    interestedNiches?: UserUpdateinterestedNichesInput | string[]
    primaryGoal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    licenses?: UserLicenseUncheckedUpdateManyWithoutUserNestedInput
    savedProducts?: SavedProductUncheckedUpdateManyWithoutUserNestedInput
    integrations?: IntegrationUncheckedUpdateManyWithoutUserNestedInput
    generatedContent?: GeneratedContentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPostsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    role?: $Enums.UserRole
    freeLicenseAvailable?: number
    kitsClaimedThisPeriod?: number
    kitPeriodStart?: Date | string | null
    extraKits?: number
    onboardingCompleted?: boolean
    experienceLevel?: string | null
    sellingPlatforms?: UserCreatesellingPlatformsInput | string[]
    interestedNiches?: UserCreateinterestedNichesInput | string[]
    primaryGoal?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    licenses?: UserLicenseCreateNestedManyWithoutUserInput
    savedProducts?: SavedProductCreateNestedManyWithoutUserInput
    integrations?: IntegrationCreateNestedManyWithoutUserInput
    generatedContent?: GeneratedContentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    role?: $Enums.UserRole
    freeLicenseAvailable?: number
    kitsClaimedThisPeriod?: number
    kitPeriodStart?: Date | string | null
    extraKits?: number
    onboardingCompleted?: boolean
    experienceLevel?: string | null
    sellingPlatforms?: UserCreatesellingPlatformsInput | string[]
    interestedNiches?: UserCreateinterestedNichesInput | string[]
    primaryGoal?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    licenses?: UserLicenseUncheckedCreateNestedManyWithoutUserInput
    savedProducts?: SavedProductUncheckedCreateNestedManyWithoutUserInput
    integrations?: IntegrationUncheckedCreateNestedManyWithoutUserInput
    generatedContent?: GeneratedContentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    freeLicenseAvailable?: IntFieldUpdateOperationsInput | number
    kitsClaimedThisPeriod?: IntFieldUpdateOperationsInput | number
    kitPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extraKits?: IntFieldUpdateOperationsInput | number
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    sellingPlatforms?: UserUpdatesellingPlatformsInput | string[]
    interestedNiches?: UserUpdateinterestedNichesInput | string[]
    primaryGoal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    licenses?: UserLicenseUpdateManyWithoutUserNestedInput
    savedProducts?: SavedProductUpdateManyWithoutUserNestedInput
    integrations?: IntegrationUpdateManyWithoutUserNestedInput
    generatedContent?: GeneratedContentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    freeLicenseAvailable?: IntFieldUpdateOperationsInput | number
    kitsClaimedThisPeriod?: IntFieldUpdateOperationsInput | number
    kitPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extraKits?: IntFieldUpdateOperationsInput | number
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    sellingPlatforms?: UserUpdatesellingPlatformsInput | string[]
    interestedNiches?: UserUpdateinterestedNichesInput | string[]
    primaryGoal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    licenses?: UserLicenseUncheckedUpdateManyWithoutUserNestedInput
    savedProducts?: SavedProductUncheckedUpdateManyWithoutUserNestedInput
    integrations?: IntegrationUncheckedUpdateManyWithoutUserNestedInput
    generatedContent?: GeneratedContentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductAssetCreateWithoutProductInput = {
    id?: string
    name: string
    type: string
    fileUrl: string
    fileSize?: string | null
    createdAt?: Date | string
  }

  export type ProductAssetUncheckedCreateWithoutProductInput = {
    id?: string
    name: string
    type: string
    fileUrl: string
    fileSize?: string | null
    createdAt?: Date | string
  }

  export type ProductAssetCreateOrConnectWithoutProductInput = {
    where: ProductAssetWhereUniqueInput
    create: XOR<ProductAssetCreateWithoutProductInput, ProductAssetUncheckedCreateWithoutProductInput>
  }

  export type ProductAssetCreateManyProductInputEnvelope = {
    data: ProductAssetCreateManyProductInput | ProductAssetCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type UserLicenseCreateWithoutProductInput = {
    id?: string
    licenseType?: $Enums.LicenseType
    claimedAt?: Date | string
    user: UserCreateNestedOneWithoutLicensesInput
  }

  export type UserLicenseUncheckedCreateWithoutProductInput = {
    id?: string
    userId: string
    licenseType?: $Enums.LicenseType
    claimedAt?: Date | string
  }

  export type UserLicenseCreateOrConnectWithoutProductInput = {
    where: UserLicenseWhereUniqueInput
    create: XOR<UserLicenseCreateWithoutProductInput, UserLicenseUncheckedCreateWithoutProductInput>
  }

  export type UserLicenseCreateManyProductInputEnvelope = {
    data: UserLicenseCreateManyProductInput | UserLicenseCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type SavedProductCreateWithoutProductInput = {
    id?: string
    savedAt?: Date | string
    user: UserCreateNestedOneWithoutSavedProductsInput
  }

  export type SavedProductUncheckedCreateWithoutProductInput = {
    id?: string
    userId: string
    savedAt?: Date | string
  }

  export type SavedProductCreateOrConnectWithoutProductInput = {
    where: SavedProductWhereUniqueInput
    create: XOR<SavedProductCreateWithoutProductInput, SavedProductUncheckedCreateWithoutProductInput>
  }

  export type SavedProductCreateManyProductInputEnvelope = {
    data: SavedProductCreateManyProductInput | SavedProductCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductAssetUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductAssetWhereUniqueInput
    update: XOR<ProductAssetUpdateWithoutProductInput, ProductAssetUncheckedUpdateWithoutProductInput>
    create: XOR<ProductAssetCreateWithoutProductInput, ProductAssetUncheckedCreateWithoutProductInput>
  }

  export type ProductAssetUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductAssetWhereUniqueInput
    data: XOR<ProductAssetUpdateWithoutProductInput, ProductAssetUncheckedUpdateWithoutProductInput>
  }

  export type ProductAssetUpdateManyWithWhereWithoutProductInput = {
    where: ProductAssetScalarWhereInput
    data: XOR<ProductAssetUpdateManyMutationInput, ProductAssetUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductAssetScalarWhereInput = {
    AND?: ProductAssetScalarWhereInput | ProductAssetScalarWhereInput[]
    OR?: ProductAssetScalarWhereInput[]
    NOT?: ProductAssetScalarWhereInput | ProductAssetScalarWhereInput[]
    id?: StringFilter<"ProductAsset"> | string
    productId?: StringFilter<"ProductAsset"> | string
    name?: StringFilter<"ProductAsset"> | string
    type?: StringFilter<"ProductAsset"> | string
    fileUrl?: StringFilter<"ProductAsset"> | string
    fileSize?: StringNullableFilter<"ProductAsset"> | string | null
    createdAt?: DateTimeFilter<"ProductAsset"> | Date | string
  }

  export type UserLicenseUpsertWithWhereUniqueWithoutProductInput = {
    where: UserLicenseWhereUniqueInput
    update: XOR<UserLicenseUpdateWithoutProductInput, UserLicenseUncheckedUpdateWithoutProductInput>
    create: XOR<UserLicenseCreateWithoutProductInput, UserLicenseUncheckedCreateWithoutProductInput>
  }

  export type UserLicenseUpdateWithWhereUniqueWithoutProductInput = {
    where: UserLicenseWhereUniqueInput
    data: XOR<UserLicenseUpdateWithoutProductInput, UserLicenseUncheckedUpdateWithoutProductInput>
  }

  export type UserLicenseUpdateManyWithWhereWithoutProductInput = {
    where: UserLicenseScalarWhereInput
    data: XOR<UserLicenseUpdateManyMutationInput, UserLicenseUncheckedUpdateManyWithoutProductInput>
  }

  export type SavedProductUpsertWithWhereUniqueWithoutProductInput = {
    where: SavedProductWhereUniqueInput
    update: XOR<SavedProductUpdateWithoutProductInput, SavedProductUncheckedUpdateWithoutProductInput>
    create: XOR<SavedProductCreateWithoutProductInput, SavedProductUncheckedCreateWithoutProductInput>
  }

  export type SavedProductUpdateWithWhereUniqueWithoutProductInput = {
    where: SavedProductWhereUniqueInput
    data: XOR<SavedProductUpdateWithoutProductInput, SavedProductUncheckedUpdateWithoutProductInput>
  }

  export type SavedProductUpdateManyWithWhereWithoutProductInput = {
    where: SavedProductScalarWhereInput
    data: XOR<SavedProductUpdateManyMutationInput, SavedProductUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductCreateWithoutAssetsInput = {
    id?: string
    name: string
    slug: string
    description: string
    shortDescription: string
    image?: string | null
    isFreeProduct?: boolean
    totalLicenses?: number
    claimedLicenses?: number
    category?: string
    featured?: boolean
    difficulty?: $Enums.Difficulty
    sellingPlatforms?: ProductCreatesellingPlatformsInput | string[]
    languages?: ProductCreatelanguagesInput | string[]
    demandLabel?: string | null
    exclusiveLicensePrice?: number | null
    exclusiveLicenseSold?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    licenses?: UserLicenseCreateNestedManyWithoutProductInput
    savedBy?: SavedProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutAssetsInput = {
    id?: string
    name: string
    slug: string
    description: string
    shortDescription: string
    image?: string | null
    isFreeProduct?: boolean
    totalLicenses?: number
    claimedLicenses?: number
    category?: string
    featured?: boolean
    difficulty?: $Enums.Difficulty
    sellingPlatforms?: ProductCreatesellingPlatformsInput | string[]
    languages?: ProductCreatelanguagesInput | string[]
    demandLabel?: string | null
    exclusiveLicensePrice?: number | null
    exclusiveLicenseSold?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    licenses?: UserLicenseUncheckedCreateNestedManyWithoutProductInput
    savedBy?: SavedProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutAssetsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutAssetsInput, ProductUncheckedCreateWithoutAssetsInput>
  }

  export type ProductUpsertWithoutAssetsInput = {
    update: XOR<ProductUpdateWithoutAssetsInput, ProductUncheckedUpdateWithoutAssetsInput>
    create: XOR<ProductCreateWithoutAssetsInput, ProductUncheckedCreateWithoutAssetsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutAssetsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutAssetsInput, ProductUncheckedUpdateWithoutAssetsInput>
  }

  export type ProductUpdateWithoutAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isFreeProduct?: BoolFieldUpdateOperationsInput | boolean
    totalLicenses?: IntFieldUpdateOperationsInput | number
    claimedLicenses?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    sellingPlatforms?: ProductUpdatesellingPlatformsInput | string[]
    languages?: ProductUpdatelanguagesInput | string[]
    demandLabel?: NullableStringFieldUpdateOperationsInput | string | null
    exclusiveLicensePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    exclusiveLicenseSold?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    licenses?: UserLicenseUpdateManyWithoutProductNestedInput
    savedBy?: SavedProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isFreeProduct?: BoolFieldUpdateOperationsInput | boolean
    totalLicenses?: IntFieldUpdateOperationsInput | number
    claimedLicenses?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    sellingPlatforms?: ProductUpdatesellingPlatformsInput | string[]
    languages?: ProductUpdatelanguagesInput | string[]
    demandLabel?: NullableStringFieldUpdateOperationsInput | string | null
    exclusiveLicensePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    exclusiveLicenseSold?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    licenses?: UserLicenseUncheckedUpdateManyWithoutProductNestedInput
    savedBy?: SavedProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserCreateWithoutLicensesInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    role?: $Enums.UserRole
    freeLicenseAvailable?: number
    kitsClaimedThisPeriod?: number
    kitPeriodStart?: Date | string | null
    extraKits?: number
    onboardingCompleted?: boolean
    experienceLevel?: string | null
    sellingPlatforms?: UserCreatesellingPlatformsInput | string[]
    interestedNiches?: UserCreateinterestedNichesInput | string[]
    primaryGoal?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    savedProducts?: SavedProductCreateNestedManyWithoutUserInput
    integrations?: IntegrationCreateNestedManyWithoutUserInput
    generatedContent?: GeneratedContentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLicensesInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    role?: $Enums.UserRole
    freeLicenseAvailable?: number
    kitsClaimedThisPeriod?: number
    kitPeriodStart?: Date | string | null
    extraKits?: number
    onboardingCompleted?: boolean
    experienceLevel?: string | null
    sellingPlatforms?: UserCreatesellingPlatformsInput | string[]
    interestedNiches?: UserCreateinterestedNichesInput | string[]
    primaryGoal?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    savedProducts?: SavedProductUncheckedCreateNestedManyWithoutUserInput
    integrations?: IntegrationUncheckedCreateNestedManyWithoutUserInput
    generatedContent?: GeneratedContentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLicensesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLicensesInput, UserUncheckedCreateWithoutLicensesInput>
  }

  export type ProductCreateWithoutLicensesInput = {
    id?: string
    name: string
    slug: string
    description: string
    shortDescription: string
    image?: string | null
    isFreeProduct?: boolean
    totalLicenses?: number
    claimedLicenses?: number
    category?: string
    featured?: boolean
    difficulty?: $Enums.Difficulty
    sellingPlatforms?: ProductCreatesellingPlatformsInput | string[]
    languages?: ProductCreatelanguagesInput | string[]
    demandLabel?: string | null
    exclusiveLicensePrice?: number | null
    exclusiveLicenseSold?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    assets?: ProductAssetCreateNestedManyWithoutProductInput
    savedBy?: SavedProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutLicensesInput = {
    id?: string
    name: string
    slug: string
    description: string
    shortDescription: string
    image?: string | null
    isFreeProduct?: boolean
    totalLicenses?: number
    claimedLicenses?: number
    category?: string
    featured?: boolean
    difficulty?: $Enums.Difficulty
    sellingPlatforms?: ProductCreatesellingPlatformsInput | string[]
    languages?: ProductCreatelanguagesInput | string[]
    demandLabel?: string | null
    exclusiveLicensePrice?: number | null
    exclusiveLicenseSold?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    assets?: ProductAssetUncheckedCreateNestedManyWithoutProductInput
    savedBy?: SavedProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutLicensesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutLicensesInput, ProductUncheckedCreateWithoutLicensesInput>
  }

  export type UserUpsertWithoutLicensesInput = {
    update: XOR<UserUpdateWithoutLicensesInput, UserUncheckedUpdateWithoutLicensesInput>
    create: XOR<UserCreateWithoutLicensesInput, UserUncheckedCreateWithoutLicensesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLicensesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLicensesInput, UserUncheckedUpdateWithoutLicensesInput>
  }

  export type UserUpdateWithoutLicensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    freeLicenseAvailable?: IntFieldUpdateOperationsInput | number
    kitsClaimedThisPeriod?: IntFieldUpdateOperationsInput | number
    kitPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extraKits?: IntFieldUpdateOperationsInput | number
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    sellingPlatforms?: UserUpdatesellingPlatformsInput | string[]
    interestedNiches?: UserUpdateinterestedNichesInput | string[]
    primaryGoal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    savedProducts?: SavedProductUpdateManyWithoutUserNestedInput
    integrations?: IntegrationUpdateManyWithoutUserNestedInput
    generatedContent?: GeneratedContentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLicensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    freeLicenseAvailable?: IntFieldUpdateOperationsInput | number
    kitsClaimedThisPeriod?: IntFieldUpdateOperationsInput | number
    kitPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extraKits?: IntFieldUpdateOperationsInput | number
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    sellingPlatforms?: UserUpdatesellingPlatformsInput | string[]
    interestedNiches?: UserUpdateinterestedNichesInput | string[]
    primaryGoal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    savedProducts?: SavedProductUncheckedUpdateManyWithoutUserNestedInput
    integrations?: IntegrationUncheckedUpdateManyWithoutUserNestedInput
    generatedContent?: GeneratedContentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductUpsertWithoutLicensesInput = {
    update: XOR<ProductUpdateWithoutLicensesInput, ProductUncheckedUpdateWithoutLicensesInput>
    create: XOR<ProductCreateWithoutLicensesInput, ProductUncheckedCreateWithoutLicensesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutLicensesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutLicensesInput, ProductUncheckedUpdateWithoutLicensesInput>
  }

  export type ProductUpdateWithoutLicensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isFreeProduct?: BoolFieldUpdateOperationsInput | boolean
    totalLicenses?: IntFieldUpdateOperationsInput | number
    claimedLicenses?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    sellingPlatforms?: ProductUpdatesellingPlatformsInput | string[]
    languages?: ProductUpdatelanguagesInput | string[]
    demandLabel?: NullableStringFieldUpdateOperationsInput | string | null
    exclusiveLicensePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    exclusiveLicenseSold?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assets?: ProductAssetUpdateManyWithoutProductNestedInput
    savedBy?: SavedProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutLicensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isFreeProduct?: BoolFieldUpdateOperationsInput | boolean
    totalLicenses?: IntFieldUpdateOperationsInput | number
    claimedLicenses?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    sellingPlatforms?: ProductUpdatesellingPlatformsInput | string[]
    languages?: ProductUpdatelanguagesInput | string[]
    demandLabel?: NullableStringFieldUpdateOperationsInput | string | null
    exclusiveLicensePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    exclusiveLicenseSold?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assets?: ProductAssetUncheckedUpdateManyWithoutProductNestedInput
    savedBy?: SavedProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserCreateWithoutIntegrationsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    role?: $Enums.UserRole
    freeLicenseAvailable?: number
    kitsClaimedThisPeriod?: number
    kitPeriodStart?: Date | string | null
    extraKits?: number
    onboardingCompleted?: boolean
    experienceLevel?: string | null
    sellingPlatforms?: UserCreatesellingPlatformsInput | string[]
    interestedNiches?: UserCreateinterestedNichesInput | string[]
    primaryGoal?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    licenses?: UserLicenseCreateNestedManyWithoutUserInput
    savedProducts?: SavedProductCreateNestedManyWithoutUserInput
    generatedContent?: GeneratedContentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutIntegrationsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    role?: $Enums.UserRole
    freeLicenseAvailable?: number
    kitsClaimedThisPeriod?: number
    kitPeriodStart?: Date | string | null
    extraKits?: number
    onboardingCompleted?: boolean
    experienceLevel?: string | null
    sellingPlatforms?: UserCreatesellingPlatformsInput | string[]
    interestedNiches?: UserCreateinterestedNichesInput | string[]
    primaryGoal?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    licenses?: UserLicenseUncheckedCreateNestedManyWithoutUserInput
    savedProducts?: SavedProductUncheckedCreateNestedManyWithoutUserInput
    generatedContent?: GeneratedContentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutIntegrationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIntegrationsInput, UserUncheckedCreateWithoutIntegrationsInput>
  }

  export type UserUpsertWithoutIntegrationsInput = {
    update: XOR<UserUpdateWithoutIntegrationsInput, UserUncheckedUpdateWithoutIntegrationsInput>
    create: XOR<UserCreateWithoutIntegrationsInput, UserUncheckedCreateWithoutIntegrationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIntegrationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIntegrationsInput, UserUncheckedUpdateWithoutIntegrationsInput>
  }

  export type UserUpdateWithoutIntegrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    freeLicenseAvailable?: IntFieldUpdateOperationsInput | number
    kitsClaimedThisPeriod?: IntFieldUpdateOperationsInput | number
    kitPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extraKits?: IntFieldUpdateOperationsInput | number
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    sellingPlatforms?: UserUpdatesellingPlatformsInput | string[]
    interestedNiches?: UserUpdateinterestedNichesInput | string[]
    primaryGoal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    licenses?: UserLicenseUpdateManyWithoutUserNestedInput
    savedProducts?: SavedProductUpdateManyWithoutUserNestedInput
    generatedContent?: GeneratedContentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutIntegrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    freeLicenseAvailable?: IntFieldUpdateOperationsInput | number
    kitsClaimedThisPeriod?: IntFieldUpdateOperationsInput | number
    kitPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extraKits?: IntFieldUpdateOperationsInput | number
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    sellingPlatforms?: UserUpdatesellingPlatformsInput | string[]
    interestedNiches?: UserUpdateinterestedNichesInput | string[]
    primaryGoal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    licenses?: UserLicenseUncheckedUpdateManyWithoutUserNestedInput
    savedProducts?: SavedProductUncheckedUpdateManyWithoutUserNestedInput
    generatedContent?: GeneratedContentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutGeneratedContentInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    role?: $Enums.UserRole
    freeLicenseAvailable?: number
    kitsClaimedThisPeriod?: number
    kitPeriodStart?: Date | string | null
    extraKits?: number
    onboardingCompleted?: boolean
    experienceLevel?: string | null
    sellingPlatforms?: UserCreatesellingPlatformsInput | string[]
    interestedNiches?: UserCreateinterestedNichesInput | string[]
    primaryGoal?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    licenses?: UserLicenseCreateNestedManyWithoutUserInput
    savedProducts?: SavedProductCreateNestedManyWithoutUserInput
    integrations?: IntegrationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGeneratedContentInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    role?: $Enums.UserRole
    freeLicenseAvailable?: number
    kitsClaimedThisPeriod?: number
    kitPeriodStart?: Date | string | null
    extraKits?: number
    onboardingCompleted?: boolean
    experienceLevel?: string | null
    sellingPlatforms?: UserCreatesellingPlatformsInput | string[]
    interestedNiches?: UserCreateinterestedNichesInput | string[]
    primaryGoal?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    licenses?: UserLicenseUncheckedCreateNestedManyWithoutUserInput
    savedProducts?: SavedProductUncheckedCreateNestedManyWithoutUserInput
    integrations?: IntegrationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGeneratedContentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGeneratedContentInput, UserUncheckedCreateWithoutGeneratedContentInput>
  }

  export type UserUpsertWithoutGeneratedContentInput = {
    update: XOR<UserUpdateWithoutGeneratedContentInput, UserUncheckedUpdateWithoutGeneratedContentInput>
    create: XOR<UserCreateWithoutGeneratedContentInput, UserUncheckedCreateWithoutGeneratedContentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGeneratedContentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGeneratedContentInput, UserUncheckedUpdateWithoutGeneratedContentInput>
  }

  export type UserUpdateWithoutGeneratedContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    freeLicenseAvailable?: IntFieldUpdateOperationsInput | number
    kitsClaimedThisPeriod?: IntFieldUpdateOperationsInput | number
    kitPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extraKits?: IntFieldUpdateOperationsInput | number
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    sellingPlatforms?: UserUpdatesellingPlatformsInput | string[]
    interestedNiches?: UserUpdateinterestedNichesInput | string[]
    primaryGoal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    licenses?: UserLicenseUpdateManyWithoutUserNestedInput
    savedProducts?: SavedProductUpdateManyWithoutUserNestedInput
    integrations?: IntegrationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGeneratedContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    freeLicenseAvailable?: IntFieldUpdateOperationsInput | number
    kitsClaimedThisPeriod?: IntFieldUpdateOperationsInput | number
    kitPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extraKits?: IntFieldUpdateOperationsInput | number
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    sellingPlatforms?: UserUpdatesellingPlatformsInput | string[]
    interestedNiches?: UserUpdateinterestedNichesInput | string[]
    primaryGoal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    licenses?: UserLicenseUncheckedUpdateManyWithoutUserNestedInput
    savedProducts?: SavedProductUncheckedUpdateManyWithoutUserNestedInput
    integrations?: IntegrationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSavedProductsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    role?: $Enums.UserRole
    freeLicenseAvailable?: number
    kitsClaimedThisPeriod?: number
    kitPeriodStart?: Date | string | null
    extraKits?: number
    onboardingCompleted?: boolean
    experienceLevel?: string | null
    sellingPlatforms?: UserCreatesellingPlatformsInput | string[]
    interestedNiches?: UserCreateinterestedNichesInput | string[]
    primaryGoal?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    licenses?: UserLicenseCreateNestedManyWithoutUserInput
    integrations?: IntegrationCreateNestedManyWithoutUserInput
    generatedContent?: GeneratedContentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSavedProductsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    role?: $Enums.UserRole
    freeLicenseAvailable?: number
    kitsClaimedThisPeriod?: number
    kitPeriodStart?: Date | string | null
    extraKits?: number
    onboardingCompleted?: boolean
    experienceLevel?: string | null
    sellingPlatforms?: UserCreatesellingPlatformsInput | string[]
    interestedNiches?: UserCreateinterestedNichesInput | string[]
    primaryGoal?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    licenses?: UserLicenseUncheckedCreateNestedManyWithoutUserInput
    integrations?: IntegrationUncheckedCreateNestedManyWithoutUserInput
    generatedContent?: GeneratedContentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSavedProductsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavedProductsInput, UserUncheckedCreateWithoutSavedProductsInput>
  }

  export type ProductCreateWithoutSavedByInput = {
    id?: string
    name: string
    slug: string
    description: string
    shortDescription: string
    image?: string | null
    isFreeProduct?: boolean
    totalLicenses?: number
    claimedLicenses?: number
    category?: string
    featured?: boolean
    difficulty?: $Enums.Difficulty
    sellingPlatforms?: ProductCreatesellingPlatformsInput | string[]
    languages?: ProductCreatelanguagesInput | string[]
    demandLabel?: string | null
    exclusiveLicensePrice?: number | null
    exclusiveLicenseSold?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    assets?: ProductAssetCreateNestedManyWithoutProductInput
    licenses?: UserLicenseCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutSavedByInput = {
    id?: string
    name: string
    slug: string
    description: string
    shortDescription: string
    image?: string | null
    isFreeProduct?: boolean
    totalLicenses?: number
    claimedLicenses?: number
    category?: string
    featured?: boolean
    difficulty?: $Enums.Difficulty
    sellingPlatforms?: ProductCreatesellingPlatformsInput | string[]
    languages?: ProductCreatelanguagesInput | string[]
    demandLabel?: string | null
    exclusiveLicensePrice?: number | null
    exclusiveLicenseSold?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    assets?: ProductAssetUncheckedCreateNestedManyWithoutProductInput
    licenses?: UserLicenseUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutSavedByInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSavedByInput, ProductUncheckedCreateWithoutSavedByInput>
  }

  export type UserUpsertWithoutSavedProductsInput = {
    update: XOR<UserUpdateWithoutSavedProductsInput, UserUncheckedUpdateWithoutSavedProductsInput>
    create: XOR<UserCreateWithoutSavedProductsInput, UserUncheckedCreateWithoutSavedProductsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSavedProductsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSavedProductsInput, UserUncheckedUpdateWithoutSavedProductsInput>
  }

  export type UserUpdateWithoutSavedProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    freeLicenseAvailable?: IntFieldUpdateOperationsInput | number
    kitsClaimedThisPeriod?: IntFieldUpdateOperationsInput | number
    kitPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extraKits?: IntFieldUpdateOperationsInput | number
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    sellingPlatforms?: UserUpdatesellingPlatformsInput | string[]
    interestedNiches?: UserUpdateinterestedNichesInput | string[]
    primaryGoal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    licenses?: UserLicenseUpdateManyWithoutUserNestedInput
    integrations?: IntegrationUpdateManyWithoutUserNestedInput
    generatedContent?: GeneratedContentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSavedProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    freeLicenseAvailable?: IntFieldUpdateOperationsInput | number
    kitsClaimedThisPeriod?: IntFieldUpdateOperationsInput | number
    kitPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    extraKits?: IntFieldUpdateOperationsInput | number
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    experienceLevel?: NullableStringFieldUpdateOperationsInput | string | null
    sellingPlatforms?: UserUpdatesellingPlatformsInput | string[]
    interestedNiches?: UserUpdateinterestedNichesInput | string[]
    primaryGoal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    licenses?: UserLicenseUncheckedUpdateManyWithoutUserNestedInput
    integrations?: IntegrationUncheckedUpdateManyWithoutUserNestedInput
    generatedContent?: GeneratedContentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductUpsertWithoutSavedByInput = {
    update: XOR<ProductUpdateWithoutSavedByInput, ProductUncheckedUpdateWithoutSavedByInput>
    create: XOR<ProductCreateWithoutSavedByInput, ProductUncheckedCreateWithoutSavedByInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutSavedByInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutSavedByInput, ProductUncheckedUpdateWithoutSavedByInput>
  }

  export type ProductUpdateWithoutSavedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isFreeProduct?: BoolFieldUpdateOperationsInput | boolean
    totalLicenses?: IntFieldUpdateOperationsInput | number
    claimedLicenses?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    sellingPlatforms?: ProductUpdatesellingPlatformsInput | string[]
    languages?: ProductUpdatelanguagesInput | string[]
    demandLabel?: NullableStringFieldUpdateOperationsInput | string | null
    exclusiveLicensePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    exclusiveLicenseSold?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assets?: ProductAssetUpdateManyWithoutProductNestedInput
    licenses?: UserLicenseUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutSavedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isFreeProduct?: BoolFieldUpdateOperationsInput | boolean
    totalLicenses?: IntFieldUpdateOperationsInput | number
    claimedLicenses?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    sellingPlatforms?: ProductUpdatesellingPlatformsInput | string[]
    languages?: ProductUpdatelanguagesInput | string[]
    demandLabel?: NullableStringFieldUpdateOperationsInput | string | null
    exclusiveLicensePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    exclusiveLicenseSold?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assets?: ProductAssetUncheckedUpdateManyWithoutProductNestedInput
    licenses?: UserLicenseUncheckedUpdateManyWithoutProductNestedInput
  }

  export type SessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AccountCreateManyUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateManyCreatedByInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserLicenseCreateManyUserInput = {
    id?: string
    productId: string
    licenseType?: $Enums.LicenseType
    claimedAt?: Date | string
  }

  export type SavedProductCreateManyUserInput = {
    id?: string
    productId: string
    savedAt?: Date | string
  }

  export type IntegrationCreateManyUserInput = {
    id?: string
    provider: string
    accessToken: string
    refreshToken?: string | null
    metadata?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GeneratedContentCreateManyUserInput = {
    id?: string
    productName: string
    contentType: string
    tone: string
    platform?: string | null
    content: string
    createdAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLicenseUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseType?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    claimedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutLicensesNestedInput
  }

  export type UserLicenseUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    licenseType?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    claimedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLicenseUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    licenseType?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    claimedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedProductUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutSavedByNestedInput
  }

  export type SavedProductUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedProductUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratedContentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    tone?: StringFieldUpdateOperationsInput | string
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratedContentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    tone?: StringFieldUpdateOperationsInput | string
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratedContentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    tone?: StringFieldUpdateOperationsInput | string
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductAssetCreateManyProductInput = {
    id?: string
    name: string
    type: string
    fileUrl: string
    fileSize?: string | null
    createdAt?: Date | string
  }

  export type UserLicenseCreateManyProductInput = {
    id?: string
    userId: string
    licenseType?: $Enums.LicenseType
    claimedAt?: Date | string
  }

  export type SavedProductCreateManyProductInput = {
    id?: string
    userId: string
    savedAt?: Date | string
  }

  export type ProductAssetUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductAssetUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductAssetUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLicenseUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseType?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    claimedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLicensesNestedInput
  }

  export type UserLicenseUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    licenseType?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    claimedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLicenseUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    licenseType?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    claimedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedProductUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSavedProductsNestedInput
  }

  export type SavedProductUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedProductUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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