import type { Schema, Attribute } from '@strapi/strapi';

export interface KafetegiaAlergenoa extends Schema.Component {
  collectionName: 'components_kafetegia_alergenoas';
  info: {
    displayName: 'alergenoa';
    icon: 'cat';
    description: '';
  };
  attributes: {
    esnekiak: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    arrautzak: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    glutena: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    moluskuak: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    krustazeoak: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    arraina: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    lupinuak: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    fruituLehorrak: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    kakahueteak: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    sesamoa: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    soja: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    sulfitoak: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    apioa: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    ziapea: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
  };
}

export interface KafetegiaEdaria extends Schema.Component {
  collectionName: 'components_kafetegia_edarias';
  info: {
    displayName: 'produktua';
    icon: 'coffee';
    description: '';
  };
  attributes: {
    beganoa: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    ekologikoa: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    prezioa: Attribute.Decimal & Attribute.Required & Attribute.DefaultTo<0>;
    izena: Attribute.String & Attribute.Required;
    alergenoak: Attribute.Component<'kafetegia.alergenoa'> & Attribute.Required;
  };
}

export interface OrokorraDatuOrokorrak extends Schema.Component {
  collectionName: 'components_orokorra_datu_orokorraks';
  info: {
    displayName: 'Datu orokorrak';
    icon: 'house';
  };
  attributes: {
    izenburua: Attribute.String;
    deskribapena: Attribute.Text;
  };
}

export interface OrokorraHelbidea extends Schema.Component {
  collectionName: 'components_helbidea_helbideas';
  info: {
    displayName: 'helbidea';
    icon: 'home';
    description: '';
  };
  attributes: {
    lehenLerroa: Attribute.String;
    bigarrenLerroa: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'kafetegia.alergenoa': KafetegiaAlergenoa;
      'kafetegia.edaria': KafetegiaEdaria;
      'orokorra.datu-orokorrak': OrokorraDatuOrokorrak;
      'orokorra.helbidea': OrokorraHelbidea;
    }
  }
}
