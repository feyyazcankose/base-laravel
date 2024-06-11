export class ERole {
    static readonly Public = "Public";

    static readonly AdminView = "AdminView";
    static readonly AdminRole = "AdminRole";
    static readonly AdminCreate = "AdminCreate";
    static readonly AdminUpdate = "AdminUpdate";
    static readonly AdminDelete = "AdminDelete";
}

export class ERolePath {
    static readonly "/anasayfa" = ERole.Public;
    static readonly "/yoneticiler" = ERole.Public;
    static readonly "/yoneticiler/ekle" = ERole.Public;
    static readonly "/yoneticiler/duzenle/:id" = ERole.Public;
    static readonly "/yoneticiler/yetki/:id" = ERole.Public;
    static readonly "/dosya-yoneticisi" = ERole.Public;
}
