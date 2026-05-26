import type {ChangeEvent} from "react";

export interface Card {
    id: string;
    name: string;
    city: string;
}

export interface CardProps {
    card: Card;
    handleSave: (e: ChangeEvent<HTMLFormElement>, id: string) => void;
    handleDelete: (id: string) => void;
}