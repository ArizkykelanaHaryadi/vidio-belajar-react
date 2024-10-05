import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/Components/ui/tabs"
import SemuaKelas from "../Fragments/SemuaKelas"
import Pemasaran from "../Fragments/Pemasaran";
import KontenDesain from "../Fragments/KontenDesain";
import KontenPengembanganDiri from "../Fragments/KontenPengembanganDiri";
import KontenBisnis from "../Fragments/KontenBisnis";

const TabsMenu = () => {
    return (
        // section
        <section className="bg-[#FFFDF3] py-16">
            <div className="container mx-auto px-4 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Koleksi Video Pembelajaran Unggulan</h2>
                <p className="text-gray-600">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
            </div>

            <Tabs defaultValue="semua" className="w-full gap-[12px] !mt-[32px]">
                <TabsList className="flex justify-start mx-0 space-x-5 border-b border-gray-200 bg-[#FFFDF3] flex-wrap md:flex-nowrap mt-8">
                    <div className="flex flex-nowrap overflow-hidden mb-16">
                        <TabsTrigger
                            value="semua"
                            className="px-4 py-2 text-sm font-medium border-tarnsparent text-gray-500 hover:text-orange-500 hover:border-gray-300 whitespace-nowrap focus:outline-none focus:text- focus:border-gray-300 data-[state=active]:text-orange-500 data-[state=active]:border-b-2 data-[state=active]:border-orange-500 data-[state=active]:bg-trasparent rounded-none"
                        >
                            Semua Kelas
                        </TabsTrigger>
                        <TabsTrigger
                            value="pemasaran"
                            className="px-4 py-2 text-sm font-medium border-tarnsparent text-gray-500 hover:text-orange-500 hover:border-gray-300 whitespace-nowrap focus:outline-none focus:text- focus:border-gray-300 data-[state=active]:text-orange-500 data-[state=active]:border-b-2 data-[state=active]:border-orange-500 data-[state=active]:bg-trasparent rounded-none"
                        >
                            Pemasaran
                        </TabsTrigger>
                        <TabsTrigger
                            value="desain"
                            className="px-4 py-2 text-sm font-medium border-tarnsparent text-gray-500 hover:text-orange-500 hover:border-gray-300 whitespace-nowrap focus:outline-none focus:text- focus:border-gray-300 data-[state=active]:text-orange-500 data-[state=active]:border-b-2 data-[state=active]:border-orange-500 data-[state=active]:bg-trasparent rounded-none"
                        >
                            Desain
                        </TabsTrigger>
                        <TabsTrigger
                            value="pengembangan-diri"
                            className="px-4 py-2 text-sm font-medium border-tarnsparent text-gray-500 hover:text-orange-500 hover:border-gray-300 whitespace-nowrap focus:outline-none focus:text- focus:border-gray-300 data-[state=active]:text-orange-500 data-[state=active]:border-b-2 data-[state=active]:border-orange-500 data-[state=active]:bg-trasparent rounded-none"
                        >
                            Pengembangan Diri
                        </TabsTrigger>
                        <TabsTrigger
                            value="bisnis"
                            className="px-4 py-2 text-sm font-medium border-tarnsparent text-gray-500 hover:text-orange-500 hover:border-gray-300 whitespace-nowrap focus:outline-none focus:text- focus:border-gray-300 data-[state=active]:text-orange-500 data-[state=active]:border-b-2 data-[state=active]:border-orange-500 data-[state=active]:bg-trasparent rounded-none"
                        >
                            Bisnis
                        </TabsTrigger>
                    </div>
                </TabsList>

                <div className="mt-8 mb-8">
                    <TabsContent value="semua">
                        <SemuaKelas />
                    </TabsContent>
                    <TabsContent value="pemasaran">
                        <Pemasaran />
                    </TabsContent>
                    <TabsContent value="desain">
                        <KontenDesain />
                    </TabsContent>
                    <TabsContent value="pengembangan-diri">
                        <KontenPengembanganDiri />
                    </TabsContent>
                    <TabsContent value="bisnis">
                        <KontenBisnis />
                    </TabsContent>
                </div>
            </Tabs>
        </section>
    );
};
export default TabsMenu;