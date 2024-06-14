import { Icon } from "@iconify/react/dist/iconify.js";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    DateRangePicker,
    Divider,
    Input,
    Select,
    SelectItem,
    Textarea,
} from "@nextui-org/react";
import React from "react";

export function AddProject() {
    return (
        <React.Fragment>
            <div className="flex gap-0 justify-between max-md:flex-wrap items-center">
                <div className="flex gap-2 pr-20 max-md:flex-wrap items-center">
                    <Icon icon="teenyicons:arrow-left-solid" />
                    <div className="flex gap-2 py-0.5">
                        <div className="text-xl tracking-normal leading-6 font-[650] text-[color:var(--p-color-text)]">
                            Vestel Buzdolabı..
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 px-5 text-xs leading-4 font-[550] text-[color:var(--p-color-text)] max-md:flex-wrap">
                    <Button>Kaydet</Button>
                    <Button>Kopyala Oluştur</Button>
                </div>
            </div>
            <div className="mt-5">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col gap-4 max-md:mt-10 max-md:max-w-full">
                            <Card shadow="sm">
                                <CardBody>
                                    <div className="grid grid-cols-1  gap-5">
                                        <div className="mb-3">
                                            <label
                                                htmlFor="name"
                                                className="block mb-2 text-sm font-normal text-gray-600 "
                                            >
                                                Proje Başlığı*
                                            </label>
                                            <Input
                                                type="text"
                                                id="project_name"
                                                name="project_name"
                                                variant="bordered"
                                                placeholder="Vestel Buzdolabı..."
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="email"
                                                className="block mb-2 text-sm font-normal text-gray-600 "
                                            >
                                                Proje Açıklaması*
                                            </label>
                                            <Textarea
                                                type="text"
                                                id="project_description"
                                                name="project_description"
                                                variant="bordered"
                                                placeholder="Vestel buzdolabı hakkında bilgi toplanması..."
                                            />
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                            <Card shadow="sm" className="p-2">
                                <CardBody>
                                    <div className="grid grid-cols-1  gap-5">
                                        <div className="mb-3">
                                            <label
                                                htmlFor="name"
                                                className="block mb-2 text-sm font-normal text-gray-600 "
                                            >
                                                Hedef Grubu Başlığı*
                                            </label>
                                            <Input
                                                type="text"
                                                id="project_name"
                                                name="project_name"
                                                variant="bordered"
                                                placeholder="Eve sahip olan herkes"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="name"
                                                className="block mb-2 text-sm font-normal text-gray-600 "
                                            >
                                                Sosyal Statü*
                                            </label>
                                            <Select
                                                items={["Zengin"]}
                                                placeholder="Sosyal statü"
                                                variant="bordered"
                                            >
                                                <SelectItem key="1">
                                                    Zengin
                                                </SelectItem>
                                                <SelectItem key="2">
                                                    Orta
                                                </SelectItem>
                                                <SelectItem key="3">
                                                    Düşük
                                                </SelectItem>
                                                <SelectItem key="4">
                                                    Göçmen Azınlık
                                                </SelectItem>
                                                <SelectItem key="5">
                                                    Yoksulluk Sınırının Altında
                                                </SelectItem>
                                            </Select>
                                        </div>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="email"
                                                className="block mb-2 text-sm font-normal text-gray-600 "
                                            >
                                                Hedef Grubu Açıklaması*
                                            </label>
                                            <Textarea
                                                type="text"
                                                id="project_description"
                                                name="project_description"
                                                variant="bordered"
                                                placeholder="Vestel buzdolabı hakkında bilgi toplanması gerekmektedir, vestel buzdolaplarının dış kondisyonları ve iç aksamlarının durumu araştırılmaktadır ve..."
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="email"
                                                className="block mb-2 text-sm font-normal text-gray-600 "
                                            >
                                                Kullanıcılar*
                                            </label>
                                            <div className="flex flex-col justify-center self-center px-4 mt-4 text-xs font-medium leading-5 rounded-lg border border-dashed  border-stone-300 h-[138px] w-[138px]">
                                                <div className="justify-center px-3 py-1  sm-lg  text-zinc-800 dark:text-neutral-400">
                                                    Excel Ekle
                                                </div>
                                                <div className="justify-center px-3 py-1 mt-2 rounded-lg bg-zinc-900 bg-opacity-0 text-neutral-600 dark:text-neutral-400">
                                                    Add from URL
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Divider></Divider>
                                    <CardFooter>
                                        <button className="flex gap-2 items-center text-sm">
                                            <Icon icon="ic:sharp-plus" />
                                            <span>Hedef Grubu Ekle</span>
                                        </button>
                                    </CardFooter>
                                </CardBody>
                            </Card>

                            <Card shadow="sm" className="p-2">
                                <CardHeader>
                                    <div className="flex flex-col">
                                        <p className="text-md font-bold">
                                            Duyurular
                                        </p>
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <div className="flex gap-2 justify-between py-2 w-full  max-md:flex-wrap max-md:max-w-full">
                                        <div className="flex gap-2 max-md:flex-wrap">
                                            <div className="flex justify-center items-center p-1 w-7 h-7 rounded-lg  bg-opacity-0">
                                                <Icon icon="fluent:re-order-dots-vertical-16-filled" />
                                            </div>
                                            <div className="my-auto text-sm leading-5 font-[550] max-md:max-w-full">
                                                Duyuru 1
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-center p-1 w-7 h-7 rounded-lg  bg-opacity-0">
                                            <Icon icon="tdesign:edit" />
                                        </div>
                                    </div>
                                    <div className="flex gap-2 justify-between py-2 w-full  border-t border-gray-200 border-solid max-md:flex-wrap max-md:max-w-full">
                                        <div className="flex gap-2 max-md:flex-wrap">
                                            <div className="flex justify-center items-center p-1 w-7 h-7 rounded-lg  bg-opacity-0">
                                                <Icon icon="fluent:re-order-dots-vertical-16-filled" />
                                            </div>
                                            <div className="my-auto text-sm leading-5 font-[550] max-md:max-w-full">
                                                Duyuru 2
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-center p-1 w-7 h-7 rounded-lg  bg-opacity-0">
                                            <Icon icon="tdesign:edit" />
                                        </div>
                                    </div>
                                </CardBody>
                                <Divider></Divider>
                                <CardFooter>
                                    <button className="flex gap-2 items-center text-sm">
                                        <Icon icon="ic:sharp-plus" />
                                        <span>Duyuru Ekle</span>
                                    </button>
                                </CardFooter>
                            </Card>

                            <Card shadow="sm" className="p-2">
                                <CardHeader>
                                    <div className="flex flex-col">
                                        <p className="text-md font-bold">
                                            Görevler
                                        </p>
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <div className="flex gap-2 justify-between py-2 w-full  max-md:flex-wrap max-md:max-w-full">
                                        <div className="flex gap-2 max-md:flex-wrap">
                                            <div className="flex justify-center items-center p-1 w-7 h-7 rounded-lg  bg-opacity-0">
                                                <Icon icon="fluent:re-order-dots-vertical-16-filled" />
                                            </div>
                                            <div className="my-auto text-sm leading-5 font-[550]  max-md:max-w-full">
                                                Buzdolabı Dereceniz Nedir?
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-center p-1 w-7 h-7 rounded-lg  bg-opacity-0">
                                            <Icon icon="tdesign:edit" />
                                        </div>
                                    </div>
                                    <div className="flex gap-2 justify-between py-2 w-full  border-t border-gray-200 border-solid max-md:flex-wrap max-md:max-w-full">
                                        <div className="flex gap-2 max-md:flex-wrap">
                                            <div className="flex justify-center items-center p-1 w-7 h-7 rounded-lg  bg-opacity-0">
                                                <Icon icon="fluent:re-order-dots-vertical-16-filled" />
                                            </div>
                                            <div className="my-auto text-sm leading-5 font-[550]  max-md:max-w-full">
                                                Buzdolabında açıkta koyduğunuz
                                                tatlılar nelerdir ?
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-center p-1 w-7 h-7 rounded-lg  bg-opacity-0">
                                            <Icon icon="tdesign:edit" />
                                        </div>
                                    </div>
                                </CardBody>
                                <Divider></Divider>
                                <CardFooter>
                                    <button className="flex gap-2 items-center text-sm">
                                        <Icon icon="ic:sharp-plus" />
                                        <span>Görev Ekle</span>
                                    </button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col pb-20 max-md:mt-10 gap-4">
                            <Card shadow="sm" className=" p-2">
                                <CardBody>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="name"
                                            className="block mb-2 text-sm font-normal text-gray-600 "
                                        >
                                            Proje Durumu
                                        </label>
                                        <Select
                                            items={["Aktif"]}
                                            selectedKeys={"1"}
                                            placeholder="Proje durumu seçiniz"
                                            variant="bordered"
                                        >
                                            <SelectItem key="1">
                                                Aktif
                                            </SelectItem>
                                            <SelectItem key="2">
                                                Pasif
                                            </SelectItem>
                                        </Select>
                                    </div>
                                </CardBody>
                            </Card>

                            <Card shadow="sm" className="p-2">
                                <CardBody>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="name"
                                            className="block mb-2 text-sm font-normal text-gray-600 "
                                        >
                                            Proje Tarihi
                                        </label>
                                        <DateRangePicker
                                            variant="bordered"
                                            className="max-w-xs"
                                            color="primary"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="name"
                                            className="block mb-2 text-sm font-normal text-gray-600 "
                                        >
                                            Şirket
                                        </label>
                                        <Select
                                            items={["Vestel"]}
                                            selectedKeys={"1"}
                                            placeholder="Şirket seçiniz"
                                            variant="bordered"
                                        >
                                            <SelectItem key="1">
                                                Vestel
                                            </SelectItem>
                                            <SelectItem key="2">
                                                Apple
                                            </SelectItem>
                                        </Select>
                                    </div>
                                </CardBody>
                            </Card>

                            <Card shadow="sm" className=" p-2">
                                <CardHeader>
                                    <div className="flex flex-col">
                                        <p className="text-md font-bold">
                                            Kapak
                                        </p>
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <div className="flex flex-col items-start px-4 pt-2 pb-4 bg-white rounded-xl max-md:pr-5">
                                        <img
                                            loading="lazy"
                                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c73e1a4cb462d187f8a19aed178616a9b5122e4502b9eabb7bc943c0d96174fb?apiKey=46cf2f3510b14b039a40336146fa4b2d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c73e1a4cb462d187f8a19aed178616a9b5122e4502b9eabb7bc943c0d96174fb?apiKey=46cf2f3510b14b039a40336146fa4b2d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c73e1a4cb462d187f8a19aed178616a9b5122e4502b9eabb7bc943c0d96174fb?apiKey=46cf2f3510b14b039a40336146fa4b2d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c73e1a4cb462d187f8a19aed178616a9b5122e4502b9eabb7bc943c0d96174fb?apiKey=46cf2f3510b14b039a40336146fa4b2d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c73e1a4cb462d187f8a19aed178616a9b5122e4502b9eabb7bc943c0d96174fb?apiKey=46cf2f3510b14b039a40336146fa4b2d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c73e1a4cb462d187f8a19aed178616a9b5122e4502b9eabb7bc943c0d96174fb?apiKey=46cf2f3510b14b039a40336146fa4b2d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c73e1a4cb462d187f8a19aed178616a9b5122e4502b9eabb7bc943c0d96174fb?apiKey=46cf2f3510b14b039a40336146fa4b2d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c73e1a4cb462d187f8a19aed178616a9b5122e4502b9eabb7bc943c0d96174fb?apiKey=46cf2f3510b14b039a40336146fa4b2d&"
                                            className="max-w-full aspect-square w-[145px]"
                                        />
                                    </div>
                                </CardBody>
                            </Card>

                            <Card shadow="sm" className=" p-2">
                                <CardHeader>
                                    <div className="flex flex-col">
                                        <p className="text-md font-bold">
                                            Moderatörler
                                        </p>
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="name"
                                            className="block mb-2 text-sm font-normal text-gray-600 "
                                        >
                                            Adı*
                                        </label>
                                        <Input
                                            type="text"
                                            id="project_name"
                                            name="project_name"
                                            variant="bordered"
                                            placeholder=""
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="name"
                                            className="block mb-2 text-sm font-normal text-gray-600 "
                                        >
                                            Soyadı*
                                        </label>
                                        <Input
                                            type="text"
                                            id="project_name"
                                            name="project_name"
                                            variant="bordered"
                                            placeholder=""
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="name"
                                            className="block mb-2 text-sm font-normal text-gray-600 "
                                        >
                                            E-posta*
                                        </label>
                                        <Input
                                            type="text"
                                            id="project_name"
                                            name="project_name"
                                            variant="bordered"
                                            placeholder=""
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="name"
                                            className="block mb-2 text-sm font-normal text-gray-600 "
                                        >
                                            Telefon*
                                        </label>
                                        <Input
                                            type="text"
                                            id="project_name"
                                            name="project_name"
                                            variant="bordered"
                                            placeholder=""
                                        />
                                    </div>
                                </CardBody>
                                <Divider></Divider>
                                <CardFooter>
                                    <button className="flex gap-2 items-center text-sm">
                                        <Icon icon="ic:sharp-plus" />
                                        <span>Moderatör Ekle</span>
                                    </button>
                                </CardFooter>
                            </Card>

                            <Card shadow="sm" className=" p-2">
                                <CardHeader>
                                    <div className="flex flex-col">
                                        <p className="text-md font-bold">
                                            Gözlemciler
                                        </p>
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="name"
                                            className="block mb-2 text-sm font-normal text-gray-600 "
                                        >
                                            Adı*
                                        </label>
                                        <Input
                                            type="text"
                                            id="project_name"
                                            name="project_name"
                                            variant="bordered"
                                            placeholder=""
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="name"
                                            className="block mb-2 text-sm font-normal text-gray-600 "
                                        >
                                            Soyadı*
                                        </label>
                                        <Input
                                            type="text"
                                            id="project_name"
                                            name="project_name"
                                            variant="bordered"
                                            placeholder=""
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="name"
                                            className="block mb-2 text-sm font-normal text-gray-600 "
                                        >
                                            E-posta*
                                        </label>
                                        <Input
                                            type="text"
                                            id="project_name"
                                            name="project_name"
                                            variant="bordered"
                                            placeholder=""
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="name"
                                            className="block mb-2 text-sm font-normal text-gray-600 "
                                        >
                                            Telefon*
                                        </label>
                                        <Input
                                            type="text"
                                            id="project_name"
                                            name="project_name"
                                            variant="bordered"
                                            placeholder=""
                                        />
                                    </div>
                                </CardBody>
                                <Divider></Divider>
                                <CardFooter>
                                    <button className="flex gap-2 items-center text-sm">
                                        <Icon icon="ic:sharp-plus" />
                                        <span>Gözlemci Ekle</span>
                                    </button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
