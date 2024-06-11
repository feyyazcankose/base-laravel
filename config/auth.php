<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Authentication Defaults
    |--------------------------------------------------------------------------
    |
    | Bu seçenek, uygulamanız için varsayılan kimlik doğrulama "guard" ve
    | şifre sıfırlama "broker"ını tanımlar. Bu değerleri gereksinimlerinize
    | göre değiştirebilirsiniz, ancak çoğu uygulama için mükemmel bir başlangıçtır.
    |
    */

    'defaults' => [
        'guard' => 'admin-api', // Varsayılan olarak kullanılacak guard
        'passwords' => 'admins', // Varsayılan olarak kullanılacak şifre sıfırlama broker'ı
    ],

    /*
    |--------------------------------------------------------------------------
    | Authentication Guards
    |--------------------------------------------------------------------------
    |
    | Bir sonraki adımda, uygulamanız için her kimlik doğrulama guard'ını tanımlayabilirsiniz.
    | Elbette, sizin için oturum depolama artı Eloquent kullanıcı sağlayıcısını kullanan
    | harika bir varsayılan yapılandırma tanımlanmıştır.
    |
    | Tüm kimlik doğrulama guard'ları bir kullanıcı sağlayıcısına sahiptir, bu da
    | kullanıcıların veritabanınızdan veya uygulama tarafından kullanılan diğer
    | depolama sisteminden nasıl çıkarılacağını tanımlar. Genellikle, Eloquent kullanılır.
    |
    | Desteklenen: "session", "token"
    |
    */

    'guards' => [
        'web' => [
            'driver' => 'session',
            'provider' => 'admins',
        ],

        'admin-api' => [
            'driver' => 'jwt',
            'provider' => 'admins',
        ],

    ],

    /*
    |--------------------------------------------------------------------------
    | User Providers
    |--------------------------------------------------------------------------
    |
    | Tüm kimlik doğrulama guard'ları bir kullanıcı sağlayıcısına sahiptir, bu da
    | kullanıcıların veritabanınızdan veya uygulama tarafından kullanılan diğer
    | depolama sisteminden nasıl çıkarılacağını tanımlar. Genellikle, Eloquent kullanılır.
    |
    | Birden fazla kullanıcı tablonuz veya modeliniz varsa, birden fazla sağlayıcıyı
    | model / tabloyu temsil edecek şekilde yapılandırabilirsiniz. Bu sağlayıcılar,
    | tanımladığınız ekstra kimlik doğrulama guard'larına atanabilir.
    |
    | Desteklenen: "database", "eloquent"
    |
    */

    'providers' => [
        'admins' => [
            'driver' => 'eloquent',
            'model' => App\Models\Admin::class,
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Resetting Passwords
    |--------------------------------------------------------------------------
    |
    | Bu yapılandırma seçenekleri, Laravel'in şifre sıfırlama işlevselliğinin
    | davranışını belirtir, tokaların saklanması için kullanılan tablo ve
    | kullanıcıların gerçekten nasıl getirileceğini sağlayan kullanıcı sağlayıcısını içerir.
    |
    | Son kullanma süresi, her sıfırlama jetonunun geçerli sayılacağı dakika sayısıdır.
    | Bu güvenlik özelliği, jetonların kısa ömürlü olmasını sağlar, böylece tahmin
    | edilmesi için daha az zaman kalır. Bunu gerektiği gibi değiştirebilirsiniz.
    |
    | Throttle ayarı, bir kullanıcının daha fazla şifre sıfırlama jetonu üretmeden
    | önce beklemesi gereken saniye sayısıdır. Bu, kullanıcının çok hızlı bir şekilde
    | çok sayıda şifre sıfırlama jetonu üretmesini önler.
    |
    */

    'passwords' => [
        'admins' => [
            'provider' => 'admins',
            'table' => 'password_resets',
            'expire' => 60,
            'throttle' => 60,
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Password Confirmation Timeout
    |--------------------------------------------------------------------------
    |
    | Burada, bir parola doğrulama penceresinin süresi dolmadan önceki saniye
    | miktarını tanımlayabilirsiniz ve kullanıcıların onay ekranı aracılığıyla
    | parolalarını yeniden girmeleri istenir. Varsayılan olarak, zaman aşımı
    | üç saat sürer.
    |
    */

    'password_timeout' => 10800,

];
