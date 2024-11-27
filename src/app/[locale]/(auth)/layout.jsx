import AuthLayout from "../layouts/Authlayout"
//import DefaultLayout from "@/app/layouts/DefaultLayout"
export default function layout({children}) {
    return (
        <AuthLayout>
            
            {children}
            
        </AuthLayout>
    )
}