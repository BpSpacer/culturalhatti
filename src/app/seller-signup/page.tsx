"use client";

import { seller, type State } from "../selleractions";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { type JSONContent } from "@tiptap/react";
import { useEffect, useState } from "react";
import { useFormState } from 'react-dom';
import { toast } from "sonner";
import { SelectCategory } from "../components/sellerSelectCategory";
import { Textarea } from "@/components/ui/textarea";
import { TipTapEditor } from "../components/sellerEditor";
import { UploadDropzone } from "@/app/lib/selleruploadthing";
import { Submitbutton } from "../components/sellerSubmitButtons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function SellerSignup() {
  const initalState: State = { message: "", status: undefined };
  const [state, formAction] = useFormState(seller, initalState);
  const [json, setJson] = useState<null | JSONContent>(null);
  const [images, setImages] = useState<null | string[]>(null);

  useEffect(() => {
    if (state.status === "success") {
      toast.success(state.message);
    } else if (state.status === "error") {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form action={formAction} className="pt-10">
            <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/">
            <ChevronLeft className="w-4 h-4" />
          </Link>
        </Button>
        <CardTitle>Sell your <span className="text-primary">product with ease</span></CardTitle>
      </div>
      <CardHeader >
        <CardDescription>
          Signup and Join CulturalHatti Where Traditions Meets Trends.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-2">
          <Label>First Name</Label>
          <Input
            name="firstName"
            type="text"
            placeholder="First Name"
            required
            minLength={3}
          />
          {state?.errors?.["name"]?.[0] && (
            <p className="text-destructive">{state?.errors?.["name"]?.[0]}</p>
          )}
        </div>
        <div className="flex flex-col gap-y-2">
        <Label>Last Name</Label>
          <Input
            name="lastName"
            type="text"
            placeholder="LastName"
            required
            minLength={3}
          />
          {state?.errors?.["name"]?.[0] && (
            <p className="text-destructive">{state?.errors?.["name"]?.[0]}</p>
          )}
        </div>
        <div className="flex flex-col gap-y-2">
          <Label>Father's Name</Label>
          <Input
            name="fatherName"
            type="text"
            placeholder="Father's Name"
            required
            minLength={3}
          />
          {state?.errors?.["name"]?.[0] && (
            <p className="text-destructive">{state?.errors?.["name"]?.[0]}</p>
          )}
        </div>
        <div className="flex flex-col gap-y-2">
          <Label>Email</Label>
          <Input
            name="email"
            type="text"
            placeholder="example@gmail.com"
            required
            minLength={3}
          />
          {state?.errors?.["name"]?.[0] && (
            <p className="text-destructive">{state?.errors?.["name"]?.[0]}</p>
          )}
        </div>
        <div className="flex flex-col gap-y-2">
          <Label>Phone</Label>
          <Input
            name="phone"
            type="text"
            placeholder="00000000000"
            required
            minLength={3}
          />
          {state?.errors?.["name"]?.[0] && (
            <p className="text-destructive">{state?.errors?.["name"]?.[0]}</p>
          )}
        </div>

        <div className="flex flex-col gap-y-2">
          <Label>CNIC</Label>
          <Input
            placeholder="0000000000000"
            type="number"
            name="cnic"
            required
            min={13}
          />
          {state?.errors?.["price"]?.[0] && (
            <p className="text-destructive">{state?.errors?.["price"]?.[0]}</p>
          )}
        </div>

        <div className="flex flex-col gap-y-2">
        <Label>Bank Account Type</Label>
      <select
        name="accountType"
        required
        className="w-full border rounded px-3 py-2"
      >
        <option value="">Select Bank</option>
        <option value="HBL">HBL</option>
        <option value="ABL">ABL</option>
        <option value="UBL">UBL</option>
        <option value="Meezan Bank">Meezan Bank</option>
        <option value="Alfalah Bank">Alfalah Bank</option>
      </select>
        </div>

        <div className="flex flex-col gap-y-2">
          <Label>Account Number</Label>
          <Input
            placeholder="0000000000000000"
            type="number"
            name="accountNumber"
            required
            min={16}
          />
          {state?.errors?.["price"]?.[0] && (
            <p className="text-destructive">{state?.errors?.["price"]?.[0]}</p>
          )}
        </div>

        {/* <div className="flex flex-col gap-y-2">
          <input type="hidden" name="cnicImages" value={JSON.stringify(images)} />
          <Label>CNIC Images (Front/Back)</Label>
          <UploadDropzone
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              setImages(res.map((item) => item.url));
              toast.success("Your images have been uploaded");
            }}
            onUploadError={(error: Error) => {
              toast.error("Something went wrong, try again");
            }}
          />
          {state?.errors?.["images"]?.[0] && (
            <p className="text-destructive">{state?.errors?.["images"]?.[0]}</p>
          )}
        </div>
        <div className="flex flex-col gap-y-2">
          <input type="hidden" name="checkbookimage" value={JSON.stringify(images)} />
          <Label>CheckBook Image </Label>
          <UploadDropzone
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              setImages(res.map((item) => item.url));
              toast.success("Your images have been uploaded");
            }}
            onUploadError={(error: Error) => {
              toast.error("Something went wrong, try again");
            }}
          />
          {state?.errors?.["images"]?.[0] && (
            <p className="text-destructive">{state?.errors?.["images"]?.[0]}</p>
          )}
        </div> */}
      </CardContent>
      <CardFooter className="mt-5">
        <Submitbutton title="SignUp" />
      </CardFooter>
    </form>
  );
}
