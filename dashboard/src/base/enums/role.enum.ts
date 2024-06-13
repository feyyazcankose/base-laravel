export class ERole {
    static readonly Public = "Public";

    static readonly ADMIN_VIEW = "ADMIN_VIEW";
    static readonly ADMIN_ROLE = "ADMIN_ROLE";
    static readonly ADMIN_CREATE = "ADMIN_CREATE";
    static readonly ADMIN_UPDATE = "ADMIN_UPDATE";
    static readonly ADMIN_DELETE = "ADMIN_DELETE";
}

export class ERolePath {
    static readonly "/anasayfa" = ERole.Public;
    static readonly "/hesabim" = ERole.Public;
    static readonly "/projeler" = ERole.Public;
    static readonly "/projeler/ekle" = ERole.Public;
    static readonly "/yoneticiler" = ERole.ADMIN_VIEW;
    static readonly "/yoneticiler/ekle" = ERole.ADMIN_CREATE;
    static readonly "/yoneticiler/duzenle/:id" = ERole.ADMIN_UPDATE;
    static readonly "/yoneticiler/yetki/:id" = ERole.ADMIN_ROLE;
    static readonly "/dosya-yoneticisi" = ERole.Public;
}
