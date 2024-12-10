import React from "react";
import {
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const shortlistingStatus = ["Accepted", "Rejected"];
export default function ApplicantsTable() {
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent applied user</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>FullName</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Resume</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
          <TableBody>
            <tr>
              <TableCell>Full Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Resume</TableCell>
              <TableCell>Date</TableCell>
              <TableCell className="text-right">Full Name</TableCell>
            </tr>
          </TableBody>
        </TableHeader>
      </Table>
    </div>
  );
}
