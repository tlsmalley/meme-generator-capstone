import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type MemeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type HomeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerMeme = {
  readonly id: string;
  readonly untitledfield?: string | null;
  readonly caption?: string | null;
  readonly image1_url?: string | null;
  readonly image1_downloaded?: boolean | null;
  readonly image1_rating?: number | null;
  readonly image2_url?: string | null;
  readonly image2_downloaded?: boolean | null;
  readonly image2_rating?: number | null;
  readonly image3_url?: string | null;
  readonly image3_downloaded?: boolean | null;
  readonly image3_rating?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMeme = {
  readonly id: string;
  readonly untitledfield?: string | null;
  readonly caption?: string | null;
  readonly image1_url?: string | null;
  readonly image1_downloaded?: boolean | null;
  readonly image1_rating?: number | null;
  readonly image2_url?: string | null;
  readonly image2_downloaded?: boolean | null;
  readonly image2_rating?: number | null;
  readonly image3_url?: string | null;
  readonly image3_downloaded?: boolean | null;
  readonly image3_rating?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Meme = LazyLoading extends LazyLoadingDisabled ? EagerMeme : LazyMeme

export declare const Meme: (new (init: ModelInit<Meme, MemeMetaData>) => Meme) & {
  copyOf(source: Meme, mutator: (draft: MutableModel<Meme, MemeMetaData>) => MutableModel<Meme, MemeMetaData> | void): Meme;
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