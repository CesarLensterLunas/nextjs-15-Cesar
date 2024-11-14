import Link from "next/link";

const Page = () => {
    return (
        <div>
            <h1>DashbaordUsers</h1>
            <ul className="mt-10">
                <li>
                    <Link href="/dashboard/users/1/">User 1</Link>
                    
                </li>
                <li>
                    <Link href="/dashboard/users/1/">User 2</Link>
                    
                </li>
                <li>
                    <Link href="/dashboard/users/1/">User 3</Link>
                    
                </li>
                <li>
                    <Link href="/dashboard/users/1/">User 4</Link>
                    
                </li>
            </ul>
        </div>
    );
};

export default Page;