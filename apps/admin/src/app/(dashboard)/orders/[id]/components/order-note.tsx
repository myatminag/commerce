"use client";

import { Label } from "@workspace/ui/components/label";
import { Card, CardContent } from "@workspace/ui/components/card";
import { TextEditor } from "@/src/components/editor/text-editor";

const OrderNote = () => {
  return (
    <Card>
      <CardContent className="space-y-3">
        <Label>Order Note</Label>
        <TextEditor className="h-40" placeholder="Enter order note..." />
      </CardContent>
    </Card>
  );
};

export default OrderNote;
