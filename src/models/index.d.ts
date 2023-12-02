import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type MemeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SiteContentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type HomeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerMeme = {
  readonly id: string;
  readonly textPrompt?: string | null;
  readonly temperature?: number | null;
  readonly imageUrl?: string | null;
  readonly vote?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMeme = {
  readonly id: string;
  readonly textPrompt?: string | null;
  readonly temperature?: number | null;
  readonly imageUrl?: string | null;
  readonly vote?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Meme = LazyLoading extends LazyLoadingDisabled ? EagerMeme : LazyMeme

export declare const Meme: (new (init: ModelInit<Meme, MemeMetaData>) => Meme) & {
  copyOf(source: Meme, mutator: (draft: MutableModel<Meme, MemeMetaData>) => MutableModel<Meme, MemeMetaData> | void): Meme;
}

type EagerSiteContent = {
  readonly id: string;
  readonly image_url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySiteContent = {
  readonly id: string;
  readonly image_url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SiteContent = LazyLoading extends LazyLoadingDisabled ? EagerSiteContent : LazySiteContent

export declare const SiteContent: (new (init: ModelInit<SiteContent, SiteContentMetaData>) => SiteContent) & {
  copyOf(source: SiteContent, mutator: (draft: MutableModel<SiteContent, SiteContentMetaData>) => MutableModel<SiteContent, SiteContentMetaData> | void): SiteContent;
}

type EagerHome = {
  readonly id: string;
  readonly address?: string | null;
  readonly image_url?: string | null;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHome = {
  readonly id: string;
  readonly address?: string | null;
  readonly image_url?: string | null;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Home = LazyLoading extends LazyLoadingDisabled ? EagerHome : LazyHome

export declare const Home: (new (init: ModelInit<Home, HomeMetaData>) => Home) & {
  copyOf(source: Home, mutator: (draft: MutableModel<Home, HomeMetaData>) => MutableModel<Home, HomeMetaData> | void): Home;
}