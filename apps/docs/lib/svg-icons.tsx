import * as React from "react";

export const FolderOpenIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.155 3.5C2.965 3.5 2 4.442 2 5.603v9.12c0 .982.815 1.777 1.82 1.777h10.723c.956 0 1.798-.615 2.068-1.51l1.332-4.421c.233-.773-.279-1.547-1.053-1.692v-.98c0-1.161-.965-2.103-2.155-2.103h-4.478a.2.2 0 0 1-.163-.085l-.87-1.273A2.17 2.17 0 0 0 7.431 3.5zm11.56 5.353v-.956a.97.97 0 0 0-.98-.956h-4.478a1.38 1.38 0 0 1-1.142-.596l-.87-1.272a.99.99 0 0 0-.814-.426H4.155a.97.97 0 0 0-.98.956v9.12c0 .348.29.63.646.63a.64.64 0 0 0 .618-.452l1.368-4.538c.27-.895 1.112-1.51 2.068-1.51z"
      clipRule="evenodd"
    />
  </svg>
);

export const FolderClosedIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="currentColor"
      d="M4.2 3.5C2.985 3.5 2 4.442 2 5.603v8.794c0 1.162.985 2.103 2.2 2.103h11.6c1.215 0 2.2-.941 2.2-2.103v-6.5c0-1.161-.985-2.103-2.2-2.103h-4.944c-.334 0-.646-.16-.832-.426l-.65-.932a2.23 2.23 0 0 0-1.83-.936z"
    />
  </svg>
);

export const SunIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      fill="currentColor"
      d="M9.75 1.5a.75.75 0 1 0-1.5 0v.75a.75.75 0 1 0 1.5 0zM9.75 15.75a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 1.5 0zM14.833 3.167a.75.75 0 0 1 0 1.06l-.533.533a.75.75 0 0 1-1.06-1.06l.532-.533a.75.75 0 0 1 1.06 0ZM3.7 13.24a.75.75 0 0 1 1.06 1.06l-.532.533a.75.75 0 1 1-1.06-1.06zM15.75 8.25a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5zM.75 9a.75.75 0 0 1 .75-.75h.75a.75.75 0 1 1 0 1.5H1.5A.75.75 0 0 1 .75 9M14.3 13.24a.75.75 0 0 0-1.06 1.06l.532.533a.75.75 0 0 0 1.06-1.06zM4.228 3.167a.75.75 0 1 0-1.06 1.06l.532.533A.75.75 0 1 0 4.76 3.7zm1.59 2.651a4.5 4.5 0 1 1 6.364 6.364 4.5 4.5 0 0 1-6.364-6.364"
    />
  </svg>
);

export const MoonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      fill="currentColor"
      d="M9.039 2.7a.75.75 0 0 0-.681-1.173 7.5 7.5 0 1 0 8.112 8.112.75.75 0 0 0-1.173-.68A4.5 4.5 0 0 1 9.04 2.7Z"
    />
  </svg>
);
