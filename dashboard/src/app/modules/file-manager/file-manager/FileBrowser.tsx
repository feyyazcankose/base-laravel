import DynamoFileManager from "@base/components/common/dynamo-file-manager/DynamoFileManager";
import {
    createFolder,
    deleteFile,
    // fetchFiles,
    renameFile,
    uploadFile,
} from "../core/api/file-manager.requests";
import Loader from "@base/layout/components/loader/Loader";

function FileBrowser() {
    return (
        <DynamoFileManager
            title="File Manager"
            addDirectory={async (folder_path) => {
                await createFolder({ folder_path });
            }}
            uploadFile={async (pathname: string, file: File) => {
                await uploadFile({ pathname, file });
            }}
            fetchFiles={async () => {
                return [
                    {
                        name: "konutkonfor",
                        isDirectory: true,
                        items: [
                            {
                                name: "WhatsApp_Image_2024-05-05_at_16.37.59.jpeg",
                                isDirectory: false,
                                size: 352116,
                                url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/WhatsApp_Image_2024-05-05_at_16.37.59.jpeg",
                            },
                            {
                                name: "apsiyon-logo.png",
                                isDirectory: false,
                                size: 104206,
                                url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/apsiyon-logo.png",
                            },
                            {
                                name: "doğukankor.JPG",
                                isDirectory: false,
                                size: 212238,
                                url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/doğukankor.JPG",
                            },
                            {
                                name: "emlak-4.jpg",
                                isDirectory: false,
                                size: 112380,
                                url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/emlak-4.jpg",
                            },
                            {
                                name: "hero",
                                isDirectory: true,
                                items: [
                                    {
                                        name: "3413914_150X150.jpg",
                                        isDirectory: false,
                                        size: 73402,
                                        url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/hero/3413914_150X150.jpg",
                                    },
                                    {
                                        name: "DALL·E_2024-05-29_13.49.38_-_A_hyperrealistic_image_of_a_worker_performing_housing_services._The_worker_should_be_shown_doing_repair_and_renovation_work,_such_as_painting_or_fixin.webp",
                                        isDirectory: false,
                                        size: 352134,
                                        url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/hero/DALL·E_2024-05-29_13.49.38_-_A_hyperrealistic_image_of_a_worker_performing_housing_services._The_worker_should_be_shown_doing_repair_and_renovation_work,_such_as_painting_or_fixin.webp",
                                    },
                                    {
                                        name: "DALL·E_2024-05-29_13.50.11_-_A_more_abstract,_hyperrealistic_image_representing_housing_services._The_image_should_have_elements_like_tools,_cleaning_supplies,_and_moving_boxes_in.webp",
                                        isDirectory: false,
                                        size: 300810,
                                        url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/hero/DALL·E_2024-05-29_13.50.11_-_A_more_abstract,_hyperrealistic_image_representing_housing_services._The_image_should_have_elements_like_tools,_cleaning_supplies,_and_moving_boxes_in.webp",
                                    },
                                    {
                                        name: "Saglam_Tapu_Ev.jpg",
                                        isDirectory: false,
                                        size: 882205,
                                        url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/hero/Saglam_Tapu_Ev.jpg",
                                    },
                                    {
                                        name: "a",
                                        isDirectory: true,
                                        items: [
                                            {
                                                name: "minimal-dashboard.webp",
                                                isDirectory: false,
                                                size: 116614,
                                                url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/hero/a/minimal-dashboard.webp",
                                            },
                                        ],
                                        size: 0,
                                        url: "",
                                    },
                                    {
                                        name: "deneme.png",
                                        isDirectory: false,
                                        size: 2483,
                                        url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/hero/deneme.png",
                                    },
                                    {
                                        name: "doğukankor.JPG",
                                        isDirectory: false,
                                        size: 212238,
                                        url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/hero/doğukankor.JPG",
                                    },
                                    {
                                        name: "mobil-2000x1000.jpg",
                                        isDirectory: false,
                                        size: 260790,
                                        url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/hero/mobil-2000x1000.jpg",
                                    },
                                    {
                                        name: "test",
                                        isDirectory: true,
                                        items: [],
                                        size: 0,
                                        url: "",
                                    },
                                    {
                                        name: "transaction_e636520b-b473-4865-9546-5bc7c6624f9c.xlsx",
                                        isDirectory: false,
                                        size: 9,
                                        url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/hero/transaction_e636520b-b473-4865-9546-5bc7c6624f9c.xlsx",
                                    },
                                    {
                                        name: "ziya.png",
                                        isDirectory: false,
                                        size: 289296,
                                        url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/hero/ziya.png",
                                    },
                                ],
                                size: 0,
                                url: "",
                            },
                            {
                                name: "kullanicilar",
                                isDirectory: true,
                                items: [
                                    {
                                        name: "03609ba8-7230-419b-83fc-1b5bfa1dfe111702285196994.jpeg",
                                        isDirectory: false,
                                        size: 88546,
                                        url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/kullanicilar/03609ba8-7230-419b-83fc-1b5bfa1dfe111702285196994.jpeg",
                                    },
                                    {
                                        name: "1d5e41cc-6abd-4556-985b-ef0336c9e2381701676738868.JPG",
                                        isDirectory: false,
                                        size: 212238,
                                        url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/kullanicilar/1d5e41cc-6abd-4556-985b-ef0336c9e2381701676738868.JPG",
                                    },
                                    {
                                        name: "503d2756-59f9-4dcb-a9eb-75bbaefd3fc31702470559092.JPG",
                                        isDirectory: false,
                                        size: 212238,
                                        url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/kullanicilar/503d2756-59f9-4dcb-a9eb-75bbaefd3fc31702470559092.JPG",
                                    },
                                    {
                                        name: "55242a4a-4a14-40bd-a00e-bd9dc37728771701860662720.JPG",
                                        isDirectory: false,
                                        size: 212238,
                                        url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/kullanicilar/55242a4a-4a14-40bd-a00e-bd9dc37728771701860662720.JPG",
                                    },
                                    {
                                        name: "9f881642-8e19-4502-a599-6f7b83c25fe91701701464538.JPG",
                                        isDirectory: false,
                                        size: 212238,
                                        url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/kullanicilar/9f881642-8e19-4502-a599-6f7b83c25fe91701701464538.JPG",
                                    },
                                    {
                                        name: "ab86a697-48e1-475e-87ad-b1f9d31d02931701689689134.JPG",
                                        isDirectory: false,
                                        size: 212238,
                                        url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/kullanicilar/ab86a697-48e1-475e-87ad-b1f9d31d02931701689689134.JPG",
                                    },
                                    {
                                        name: "ac5d9996-6fd4-424c-8a8d-d1275eb2fc381701441758233.JPG",
                                        isDirectory: false,
                                        size: 212238,
                                        url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/kullanicilar/ac5d9996-6fd4-424c-8a8d-d1275eb2fc381701441758233.JPG",
                                    },
                                    {
                                        name: "af6df4fd-a03a-467b-ac8a-5a98877abfda1701181113589.JPG",
                                        isDirectory: false,
                                        size: 212238,
                                        url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/kullanicilar/af6df4fd-a03a-467b-ac8a-5a98877abfda1701181113589.JPG",
                                    },
                                    {
                                        name: "c4f923c1-1e29-468f-ab1e-5e2c315848c91701181871043.JPG",
                                        isDirectory: false,
                                        size: 212238,
                                        url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/kullanicilar/c4f923c1-1e29-468f-ab1e-5e2c315848c91701181871043.JPG",
                                    },
                                    {
                                        name: "cd7f7182-0e76-45a5-a3bf-f5e285a8957b1703839630699.JPG",
                                        isDirectory: false,
                                        size: 212238,
                                        url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/kullanicilar/cd7f7182-0e76-45a5-a3bf-f5e285a8957b1703839630699.JPG",
                                    },
                                    {
                                        name: "ce20e29b-66ff-411b-b87d-2e9619dc708d1701259130587.JPG",
                                        isDirectory: false,
                                        size: 212238,
                                        url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/kullanicilar/ce20e29b-66ff-411b-b87d-2e9619dc708d1701259130587.JPG",
                                    },
                                    {
                                        name: "d575a8d6-eee8-4f79-b445-480e1fc76dbd1701959057806.png",
                                        isDirectory: false,
                                        size: 151156,
                                        url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/kullanicilar/d575a8d6-eee8-4f79-b445-480e1fc76dbd1701959057806.png",
                                    },
                                    {
                                        name: "f228dca7-9fcb-4e39-a8f1-68454b2316171709626942407.jpeg",
                                        isDirectory: false,
                                        size: 78245,
                                        url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/kullanicilar/f228dca7-9fcb-4e39-a8f1-68454b2316171709626942407.jpeg",
                                    },
                                ],
                                size: 0,
                                url: "",
                            },
                            {
                                name: "logo.webp",
                                isDirectory: false,
                                size: 18052,
                                url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/logo.webp",
                            },
                            {
                                name: "musteriler",
                                isDirectory: true,
                                items: [
                                    {
                                        name: "Group.png",
                                        isDirectory: false,
                                        size: 18917,
                                        url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/musteriler/Group.png",
                                    },
                                    {
                                        name: "empty.jpg",
                                        isDirectory: false,
                                        size: 58598,
                                        url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/musteriler/empty.jpg",
                                    },
                                    {
                                        name: "test",
                                        isDirectory: true,
                                        items: [
                                            {
                                                name: "bg-removed.png",
                                                isDirectory: false,
                                                size: 115328,
                                                url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/musteriler/test/bg-removed.png",
                                            },
                                            {
                                                name: "minimal-dashboard.png",
                                                isDirectory: false,
                                                size: 525847,
                                                url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/musteriler/test/minimal-dashboard.png",
                                            },
                                            {
                                                name: "transaction_e636520b-b473-4865-9546-5bc7c6624f9c.xlsx",
                                                isDirectory: false,
                                                size: 9,
                                                url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/musteriler/test/transaction_e636520b-b473-4865-9546-5bc7c6624f9c.xlsx",
                                            },
                                        ],
                                        size: 0,
                                        url: "",
                                    },
                                ],
                                size: 0,
                                url: "",
                            },
                            {
                                name: "site",
                                isDirectory: true,
                                items: [
                                    {
                                        name: "favicon-32x32.png",
                                        isDirectory: false,
                                        size: 885,
                                        url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/site/favicon-32x32.png",
                                    },
                                    {
                                        name: "favicon-test.svg",
                                        isDirectory: false,
                                        size: 2482,
                                        url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/site/favicon-test.svg",
                                    },
                                    {
                                        name: "favicon.webp",
                                        isDirectory: false,
                                        size: 26690,
                                        url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/site/favicon.webp",
                                    },
                                    {
                                        name: "logo.webp",
                                        isDirectory: false,
                                        size: 60840,
                                        url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/site/logo.webp",
                                    },
                                ],
                                size: 0,
                                url: "",
                            },
                            {
                                name: "slider.jpeg",
                                isDirectory: false,
                                size: 88546,
                                url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/slider.jpeg",
                            },
                            {
                                name: "urunler",
                                isDirectory: true,
                                items: [
                                    {
                                        name: "bilgisayar-elektronik.jpg",
                                        isDirectory: false,
                                        size: 15062,
                                        url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/urunler/bilgisayar-elektronik.jpg",
                                    },
                                    {
                                        name: "bilgisayar.webp",
                                        isDirectory: false,
                                        size: 21244,
                                        url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/urunler/bilgisayar.webp",
                                    },
                                    {
                                        name: "vazo.webp",
                                        isDirectory: false,
                                        size: 217038,
                                        url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/urunler/vazo.webp",
                                    },
                                ],
                                size: 0,
                                url: "",
                            },
                            {
                                name: "yoneticiler",
                                isDirectory: true,
                                items: [
                                    {
                                        name: "empty.jpg",
                                        isDirectory: false,
                                        size: 58598,
                                        url: "https://konutkonfor-backend.dev.inity.com.tr/api/openoffice/cdn/konutkonfor-dev?filePath=konutkonfor/yoneticiler/empty.jpg",
                                    },
                                ],
                                size: 0,
                                url: "",
                            },
                        ],
                        size: 0,
                        url: "",
                    },
                ];
            }}
            deleteFile={async (filename: string) => {
                await deleteFile({ filename });
            }}
            renameFile={async (oldName: string, newName: string) => {
                renameFile({ oldName, newName });
            }}
            pickUrl={(url: string) => {
                console.log("pickUrl:", url);
            }}
            config={{
                loader: <Loader />,
            }}
        />
    );
}

export default FileBrowser;
