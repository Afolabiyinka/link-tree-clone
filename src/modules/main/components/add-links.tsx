"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CustomInput from "@/modules/auth/components/custom-input";
import { ArrowRight } from "lucide-react";

const AddLinks = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={`lg`}>
          Add Social Links <ArrowRight />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add your social Links</DialogTitle>
          <DialogDescription>
            Add all the social links you want to show up on your linky's profile
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3">
          <CustomInput
            icon="FacebookIcon"
            placeholder="Enter your facebook link"
            type="text"
          />
          <CustomInput
            icon="InstagramIcon"
            placeholder="Enter your facebook link"
            type="text"
          />
          <CustomInput
            icon="TwitterIcon"
            placeholder="Enter your facebook link"
            type="text"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddLinks;
