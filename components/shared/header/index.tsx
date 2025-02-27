import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/images/logo.png"
              alt={APP_NAME}
              height={120}
              width={120}
              priority={true}
              className=""
            />
          </Link>
        </div>
        <div className="space-x-2">
          <Button asChild variant="ghost">
            <Link href="/cart">
              <ShoppingCart size={24} /> Cart
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/sign-in">
              <UserIcon size={24} /> Sign In
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
