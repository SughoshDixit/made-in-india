export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /**
   * Leverages the internal Python implmeentation of UUID (uuid.UUID) to provide native UUID objects
   * in fields, resolvers and input.
   */
  UUID: any
}

export type Query = {
  __typename?: 'Query'
  category?: Maybe<CategoryType>
  categories?: Maybe<Array<Maybe<CategoryType>>>
  comany?: Maybe<ProductType>
  companies?: Maybe<Array<Maybe<CompanyType>>>
  product?: Maybe<ProductType>
  products?: Maybe<Array<Maybe<ProductType>>>
}

export type QueryCategoryArgs = {
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export type QueryComanyArgs = {
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export type QueryProductArgs = {
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export type CategoryType = {
  __typename?: 'CategoryType'
  id: Scalars['UUID']
  name: Scalars['String']
  productSet: Array<ProductType>
}

export type ProductType = {
  __typename?: 'ProductType'
  id: Scalars['UUID']
  name: Scalars['String']
  logo: Scalars['String']
  isIndian: Scalars['Boolean']
  description: Scalars['String']
  blogUrl?: Maybe<Scalars['String']>
  websiteUrl?: Maybe<Scalars['String']>
  company: CompanyType
  category: CategoryType
  extraField?: Maybe<Scalars['String']>
}

export type CompanyType = {
  __typename?: 'CompanyType'
  id: Scalars['UUID']
  name: Scalars['String']
  description: Scalars['String']
  websiteUrl: Scalars['String']
  productSet: Array<ProductType>
}
