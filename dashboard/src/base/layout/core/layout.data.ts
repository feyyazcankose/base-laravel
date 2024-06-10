import { ERole } from "@base/enums/role.enum";

export const Menus = [
    {
        title: "Ana Sayfa",
        roles: `${ERole.Public}`,
        to: "/anasayfa",
        icon: "majesticons:home-line",
    },
    {
        section: "İstekler",
    },
    {
        title: "Kullanıcı İstekleri",
        to: "/istekler",
        roles: `${ERole.Public}`,
        icon: "majesticons:phone-incoming-line",
    },
    {
        section: "Modüller",
    },
    {
        title: "Talepler",
        roles: `${ERole.Public}`,
        to: "/talepler",
        icon: "mdi:cart-outline",
    },
    {
        title: "Tedarikçi İşlemleri",
        roles: `${ERole.Public}, ${ERole.Public}`,
        icon: "ph:truck",
        children: [
            {
                title: "Tedarikçiler",
                to: "/tedarikciler",
                roles: `${ERole.Public}`,
            },
            {
                title: "Tedarikçi Tipleri",
                to: "/tedarikci-tipleri",
                roles: `${ERole.Public}`,
            },
        ],
    },

    {
        title: "Üyeler",
        roles: `${ERole.Public}`,
        to: "/kullanicilar",
        icon: "majesticons:users-line",
    },
    {
        title: "Yöneticiler",
        roles: `${ERole.Public}`,
        to: "/yoneticiler",
        icon: "ri:admin-line",
    },
    {
        title: "Müşteriler",
        roles: `${ERole.Public}`,
        to: "/musteriler",
        icon: "ri:building-line",
    },
    {
        title: "İçerikler",
        roles: `${ERole.Public},${ERole.Public},${ERole.Public},${ERole.Public},${ERole.Public},${ERole.Public},${ERole.Public}`,
        icon: "majesticons:textbox-line",
        children: [
            {
                title: "Sözleşmeler",
                to: "/icerikler/sozlesmeler",
                roles: `${ERole.Public}`,
            },
            {
                title: "Sayfalar",
                to: "/icerikler/sayfalar",
                roles: `${ERole.Public}`,
            },
            {
                to: "/icerikler/blog-kategorileri",
                roles: ERole.Public,
                title: "Blog Kategorileri",
            },
            {
                to: "/icerikler/bloglar",
                roles: ERole.Public,
                title: "Bloglar",
            },
            {
                to: "/icerikler/bilesenler",
                roles: ERole.Public,
                title: "Bileşenler",
            },
            {
                to: "/icerikler/soru-kategorileri",
                roles: ERole.Public,
                title: "SSS Kategorileri",
            },
            {
                to: "/icerikler/sorular",
                roles: ERole.Public,
                title: "SSS",
            },
        ],
    },
    {
        title: "Tanımlamalar",
        roles: `${ERole.Public},${ERole.Public},${ERole.Public},${ERole.Public}`,
        icon: "lets-icons:save",
        children: [
            {
                to: "/on-tanimlamalar/sektorler",
                roles: ERole.Public,
                title: "Sektörler",
            },
            {
                to: "/on-tanimlamalar/adimlar",
                roles: ERole.Public,
                title: "Adımlar",
            },
            {
                to: "/on-tanimlamalar/birimler",
                roles: ERole.Public,
                title: "Birimler",
            },
            {
                to: "/on-tanimlamalar/bankalar",
                roles: `${ERole.Public}`,
                title: "Bankalar",
            },
        ],
    },
    {
        title: "Değişkenler",
        roles: `${ERole.Public}`,
        to: "/degiskenler",
        icon: "pepicons-pop:info-circle",
    },
    {
        title: "İş Kolları",
        roles: `${ERole.Public}`,
        to: "/is-kollari",
        icon: "icon-park-outline:right-branch",
    },
    {
        title: "Hizmet Grupları",
        roles: `${ERole.Public}`,
        to: "/hizmet-gruplari",
        icon: "lets-icons:group-share",
    },
    {
        title: "Hizmetler",
        roles: `${ERole.Public}`,
        to: "/hizmetler",
        icon: "octicon:stack-16",
    },
    {
        title: "Ürünler",
        roles: `${ERole.Public}`,
        to: "/urunler",
        icon: "fluent-mdl2:product-variant",
    },
    {
        title: "Sözleşmeler",
        roles: `${ERole.Public}`,
        to: "/sozlesmeler",
        icon: "uil:cart",
    },
    {
        title: "Sözleşme Grupları",
        roles: `${ERole.Public}`,
        to: "/sozlesme-gruplari",
        icon: "fluent:group-list-20-filled",
    },

    {
        section: "Ayarlar",
    },
    {
        title: "Ayarlar",
        roles: `${ERole.Public},${ERole.Public},${ERole.Public},${ERole.Public},${ERole.Public}`,
        icon: "majesticons:settings-cog-line",
        children: [
            {
                to: "/ayarlar/sistem",
                roles: ERole.Public,
                title: "Sistem Ayarları",
            },
            {
                to: "/ayarlar/e-ticaret",
                roles: ERole.Public,
                title: "E-ticaret Ayarları",
            },
            {
                to: "/ayarlar/kullanici",
                roles: ERole.Public,
                title: "Kullanıcı Arayüz Ayarları",
            },
        ],
    },

    {
        title: "Dosya Yöneticisi",
        roles: `${ERole.Public}`,
        to: "/dosya-yoneticisi",
        icon: "majesticons:folder-line",
    },
    {
        title: "Kampanyalar",
        roles: `${ERole.Public}`,
        to: "/kampanyalar",
        icon: "material-symbols:campaign-outline-sharp",
    },
    {
        title: "Loglar",
        roles: `${ERole.Public}`,
        to: "/loglar",
        icon: "mingcute:history-fill",
    },
];
