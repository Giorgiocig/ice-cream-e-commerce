import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    bestFlavor: Schema.Attribute.Component<'elements.flavor', true>;
    cta: Schema.Attribute.Component<'elements.link', false>;
    featuredFlavors: Schema.Attribute.JSON;
    featuredFlavorsTitle: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    subHeading: Schema.Attribute.Text;
  };
}

export interface BlocksInfoBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_info_blocks';
  info: {
    displayName: 'Info Block';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.Text;
    header: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface ElementsFlavor extends Struct.ComponentSchema {
  collectionName: 'components_elements_flavors';
  info: {
    displayName: 'Flavor';
  };
  attributes: {
    description: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    logoText: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.hero-section': BlocksHeroSection;
      'blocks.info-block': BlocksInfoBlock;
      'elements.flavor': ElementsFlavor;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
    }
  }
}
