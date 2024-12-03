import type { Attribute, Schema } from '@strapi/strapi';

export interface BiziElkarlana extends Schema.Component {
  collectionName: 'components_bizi_elkarlanas';
  info: {
    description: '';
    displayName: 'elkarlana';
    icon: 'handHeart';
  };
  attributes: {
    erakundeak: Attribute.Relation<
      'bizi.elkarlana',
      'oneToMany',
      'api::erakundea.erakundea'
    >;
    harremana: Attribute.String;
  };
}

export interface KafetegiaAlergenoa extends Schema.Component {
  collectionName: 'components_kafetegia_alergenoas';
  info: {
    description: '';
    displayName: 'alergenoa';
    icon: 'cat';
  };
  attributes: {
    apioa: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    arraina: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    arrautzak: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    esnekiak: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    fruituLehorrak: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    glutena: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    kakahueteak: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    krustazeoak: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    lupinuak: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    moluskuak: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    sesamoa: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    soja: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    sulfitoak: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    ziapea: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
  };
}

export interface KafetegiaEdaria extends Schema.Component {
  collectionName: 'components_kafetegia_edarias';
  info: {
    description: '';
    displayName: 'produktua';
    icon: 'coffee';
  };
  attributes: {
    alergenoak: Attribute.Component<'kafetegia.alergenoa'> & Attribute.Required;
    beganoa: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    ekologikoa: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    izena: Attribute.String & Attribute.Required;
    prezioa: Attribute.Decimal & Attribute.Required & Attribute.DefaultTo<0>;
  };
}

export interface KafetegiaIzenburua extends Schema.Component {
  collectionName: 'components_kafetegia_izenburuas';
  info: {
    description: '';
    displayName: 'Izenburua';
    icon: 'strikeThrough';
  };
  attributes: {
    izenburuBalioa: Attribute.String & Attribute.Required;
  };
}

export interface KafetegiaProduktuTaldea extends Schema.Component {
  collectionName: 'components_kafetegia_produktu_taldeas';
  info: {
    displayName: 'Produktu taldea';
  };
  attributes: {
    izenburua: Attribute.String;
    produktuak: Attribute.Component<'kafetegia.edaria', true> &
      Attribute.Required;
  };
}

export interface OrokorraDatuOrokorrak extends Schema.Component {
  collectionName: 'components_orokorra_datu_orokorraks';
  info: {
    displayName: 'Datu orokorrak';
    icon: 'house';
  };
  attributes: {
    deskribapena: Attribute.Text;
    izenburua: Attribute.String;
  };
}

export interface OrokorraHelbidea extends Schema.Component {
  collectionName: 'components_helbidea_helbideas';
  info: {
    description: '';
    displayName: 'helbidea';
    icon: 'home';
  };
  attributes: {
    bigarrenLerroa: Attribute.String;
    lehenLerroa: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'bizi.elkarlana': BiziElkarlana;
      'kafetegia.alergenoa': KafetegiaAlergenoa;
      'kafetegia.edaria': KafetegiaEdaria;
      'kafetegia.izenburua': KafetegiaIzenburua;
      'kafetegia.produktu-taldea': KafetegiaProduktuTaldea;
      'orokorra.datu-orokorrak': OrokorraDatuOrokorrak;
      'orokorra.helbidea': OrokorraHelbidea;
    }
  }
}
