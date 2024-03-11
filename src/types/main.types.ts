export type PropsWithClassName<T = unknown> = T & {
  className?: string;
};

export type PropsWithSizes<T = unknown> = T & {
  width?: number;
  height?: number;
};
