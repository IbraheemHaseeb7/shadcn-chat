import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MouseEvent } from "react";
import { auth, provider } from "@/config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "@/state/slices/user";

export default function UserAuthForm() {
    const dispatch = useDispatch();

    function handleClick(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user.displayName);
                dispatch(
                    login({
                        email: result.user.email!,
                        photoURL: result.user.photoURL!,
                        displayName: result.user.displayName!,
                    })
                );
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <form className="w-full flex justify-center items-center">
            <Button onClick={handleClick}>
                <Mail className="mr-2 h-4 w-4" /> Continue with Google
            </Button>
        </form>
    );
}
