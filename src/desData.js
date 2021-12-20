export const desData = [
  {
    name: "v-title",
    props: `
        <v-title color="#f28500"> pkg: v-title-wcs </v-title>
        props: {
            color: {
                type: String,
                default: "#f00",
            },
            fontSize: {
                type: String,
                default: "4rem",
            },
        },
    
    `,
  },
  {
    name: "v-card",
    props: `
        <v-card>Hello~ Card</v-card>

        props: {
            width: {
                type: String,
                default: "400px",
            },
            flexWrap: {
                type: String,
                default: "wrap",
            },
            display: {
                type: String,
                default: "flex",
            },
        },
    `,
  },
  {
    name: "v-check-list",
    props: `
        <v-check-list :list="list" :list-title="title" mode="CHECK" />

        props: {
            listTitle: {
              type: String,
              default: "list title",
            },
            list: {
              type: Array,
              default: ["First", "Second"],
            },
            mode: {
              type: String,
              default: "NONE",
            },
            clickCallback: {
              type: Function,
              default: () => {},
            },
        },
    `,
  },
];

export default {};
