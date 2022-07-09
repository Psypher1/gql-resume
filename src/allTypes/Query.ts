import { queryType } from "@nexus/schema";
import { data } from "@/src/data";

import { Bio } from "./index";

//* query is a root type
export const Query = queryType({
  definition(t) {
    t.field("bio", {
      type: Bio,
      resolve: () => data.bio,
    });
  },
});
