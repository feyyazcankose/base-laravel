<?php

namespace App\Enums;

class RoleTypes
{
    const USER_VIEW = 'USER_VIEW';
    const USER_CREATE = 'USER_CREATE';
    const USER_UPDATE = 'USER_UPDATE';
    const USER_DELETE = 'USER_DELETE';

    const ADMIN_VIEW = 'ADMIN_VIEW';
    const ADMIN_ROLE = 'ADMIN_ROLE';
    const ADMIN_CREATE = 'ADMIN_CREATE';
    const ADMIN_UPDATE = 'ADMIN_UPDATE';
    const ADMIN_DELETE = 'ADMIN_DELETE';

    const COMPANY_VIEW = 'COMPANY_VIEW';
    const COMPANY_CREATE = 'COMPANY_CREATE';
    const COMPANY_UPDATE = 'COMPANY_UPDATE';
    const COMPANY_DELETE = 'COMPANY_DELETE';


    public static function getValues()
    {
        return [
            self::USER_VIEW,
            self::USER_CREATE,
            self::USER_UPDATE,
            self::USER_DELETE,
            self::ADMIN_VIEW,
            self::ADMIN_ROLE,
            self::ADMIN_CREATE,
            self::ADMIN_UPDATE,
            self::ADMIN_DELETE,
            self::COMPANY_VIEW,
            self::COMPANY_CREATE,
            self::COMPANY_UPDATE,
            self::COMPANY_DELETE,
        ];
    }
}
