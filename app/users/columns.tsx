"use client"

import { ColumnDef } from "@tanstack/react-table"

export const columns = [
    {
        accessorKey: "id",
        header: "Id",
    },
    {
        accessorKey: "created_at",
        header: "Created",
    },
    {
        accessorKey: "first_name",
        header: "First name",
    },
    {
        accessorKey: "last_name",
        header: "Last name",
    },
    {
        accessorKey: "dob",
        header: "Birthday",
    },
    {
        accessorKey: "address",
        header: "Address",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "phone",
        header: "Phone #",
    },
]