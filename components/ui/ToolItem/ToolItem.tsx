import Image from "next/image";
import { useRouter } from "next/router";


type toolItemProps = {
    title: string,
    description: string,
    source: string,
    url: string
}
export function ToolItem({ title, description, source, url }: toolItemProps) {
    const router = useRouter();

    function navigateToToolPage() {
        router.push(url)
    }
    return (
        <>
            <div className="hover-underline-animation text-center col-sm-12 col-md-6 col-lg-4" onClick={() => navigateToToolPage()}>
                <Image loading="lazy" alt={source} src={source} height={130} width={130} />
                <h5>{title}</h5>
                <p className="px-5">{description}</p>
            </div>
        </>
    )
}