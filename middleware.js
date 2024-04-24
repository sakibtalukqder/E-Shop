import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(

    function middleware(request) {

        const SELLER = request.nextauth.token.role === 'SELLER'
        const ADMIN = request.nextauth.token.role === 'ADMIN'
        const USER = request.nextauth.token.role === 'USER'

        if (request.nextUrl.pathname.startsWith('/Outlate/Seller/Dashboard')) {
            if ((USER)) {
                return NextResponse.rewrite(new URL('/Components/Denided', request.url))
            }
        }

        if (request.nextUrl.pathname.startsWith('/Outlate/Admin')
            && (!ADMIN)) {
            return NextResponse.rewrite(new URL('/Components/Denided', request.url))
        }
        
        if (request.nextUrl.pathname.startsWith('/Outlate/Seller/PostProduct')
            && (USER)) {
            return NextResponse.rewrite(new URL('/Components/Denided', request.url))
        }

    },

    {
        callbacks: {
            authorized: async ({ req, token }) => {
                if (!token) return false
            }
        },
        secret: process.env.JWT_SECRET,
    },
)

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/Outlate/:path*',
}
