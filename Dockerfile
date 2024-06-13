# Laravel için PHP 8.0 imajını kullanıyoruz
FROM php:8.0-fpm

# Gerekli paketleri ve bağımlılıkları kuruyoruz
RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    locales \
    zip \
    jpegoptim optipng pngquant gifsicle \
    vim \
    unzip \
    git \
    curl

# Composer'ı kuruyoruz
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Çalışma dizinini belirtiyoruz
WORKDIR /var/www

# PHP eklentilerini kuruyoruz
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Nginx için bir yapılandırma dosyası oluşturuyoruz
COPY . /var/www

# Laravel bağımlılıklarını kuruyoruz
RUN composer install

# Dosya izinlerini ayarlıyoruz
RUN chown -R www-data:www-data /var/www
RUN chmod -R 755 /var/www

# Başlangıç komutunu belirliyoruz
CMD ["php-fpm"]
