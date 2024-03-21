import Search from "./Search"

const Nav = () => {
    return (
        <div className="flex items-center justify-between p-5 max-sm:flex-col">
            <h1 className="text-4xl font-bold">NASA - API</h1>
            <Search />
        </div>
    )
}

export default Nav