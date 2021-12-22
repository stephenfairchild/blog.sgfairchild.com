import { useLoaderData, LoaderFunction } from "remix";

type LoaderData = {
    data: any;
};

export async function loader<LoaderFunction>() {
    const val = BLOG.get("foo", {
        type: "json",
    });

    return {
        data: val,
    };
}

export default function Index() {
    const data = useLoaderData();
    return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
            Hello, World!
            {JSON.stringify(data)}
        </div>
    );
}
