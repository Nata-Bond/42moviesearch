import queryStrying from "query-string";

export default function getQueryParams(qs) {
  return queryStrying.parse(qs);
}
