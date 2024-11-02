
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

export default async function Component() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    return (
        <Avatar>
            {user?.picture ? (
                <AvatarImage
                    src={user?.picture}
                    alt="user profile avatar"

                />
            ) : (
                <AvatarFallback >
                    {user?.given_name?.[0]}
                    {user?.family_name?.[0]}
                </AvatarFallback>
            )}
        </Avatar>
    )
}
