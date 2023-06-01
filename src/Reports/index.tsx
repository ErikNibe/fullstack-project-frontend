import pdfMake from "pdfmake/build/pdfmake";
import { TDocumentDefinitions } from "pdfmake/interfaces";
import { iClient, iContact } from "../providers/types";

export const pdfReport = (
  client: iClient | null,
  contacts: iContact[] | null
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formatedContacts: any = contacts?.map((contact) => {
    return [
      { text: contact.fullName, fontSize: 10, margin: [0, 2, 0, 2] },
      { text: contact.email, fontSize: 10, margin: [0, 2, 0, 2] },
      { text: contact.phone, fontSize: 10, margin: [0, 2, 0, 2] },
    ];
  });

  const pdfConfig: TDocumentDefinitions = {
    pageSize: "A4",
    pageMargins: [15, 50, 15, 40],

    content: [
      { text: "Informações do perfil\n\n", style: "header" },
      {
        text: [{ text: "Nome completo: ", bold: true }, `${client?.fullName}`],
      },
      {
        text: [{ text: "Email: ", bold: true }, `${client?.email}`],
      },
      {
        text: [{ text: "Telefone: ", bold: true }, `${client?.phone}\n\n`],
      },
      {
        table: {
          headerRows: 1,
          widths: ["*", "*", "*", "*"],
          body: [
            [
              { text: "Nome Completo", style: "tableHeader", fontSize: 10 },
              { text: "E-mail", style: "tableHeader", fontSize: 10 },
              { text: "Telefone", style: "tableHeader", fontSize: 10 },
            ],
            ...formatedContacts,
          ],
        },
        layout: "headerLineOnly",
      },
    ],

    styles: {
      header: {
        fontSize: 18,
        bold: true,
      },
    },
  };

  pdfMake.createPdf(pdfConfig).download();
};
