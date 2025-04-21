import type { Schema, Struct } from '@strapi/strapi';

export interface EkintzaSarrera extends Struct.ComponentSchema {
  collectionName: 'components_ekintza_sarreras';
  info: {
    description: '';
    displayName: 'Sarrera';
    icon: 'priceTag';
  };
  attributes: {
    deskribapena: Schema.Attribute.Text;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface ParagraphIrudia extends Struct.ComponentSchema {
  collectionName: 'components_paragraph_irudias';
  info: {
    displayName: 'irudia';
    icon: 'picture';
  };
  attributes: {
    media: Schema.Attribute.Media<'images' | 'files', true> &
      Schema.Attribute.Required;
  };
}

export interface ParagraphTestua extends Struct.ComponentSchema {
  collectionName: 'components_paragraph_testuas';
  info: {
    description: '';
    displayName: 'testua';
    icon: 'pencil';
  };
  attributes: {
    testua: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface ParagraphYoutube extends Struct.ComponentSchema {
  collectionName: 'components_paragraph_youtubes';
  info: {
    description: '';
    displayName: 'youtube';
    icon: 'play';
  };
  attributes: {
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'ekintza.sarrera': EkintzaSarrera;
      'paragraph.irudia': ParagraphIrudia;
      'paragraph.testua': ParagraphTestua;
      'paragraph.youtube': ParagraphYoutube;
    }
  }
}
