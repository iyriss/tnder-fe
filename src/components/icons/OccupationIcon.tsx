const OccupationIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={26}
      height={24}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.697 4.75A3.697 3.697 0 000 8.445v11.857A3.697 3.697 0 003.697 24h18.231a3.697 3.697 0 003.697-3.697V8.446a3.697 3.697 0 00-3.697-3.697H3.698zm1.785 2.605a2.805 2.805 0 00-2.805 2.804v8.797a2.805 2.805 0 002.805 2.805h14.916a2.805 2.805 0 002.805-2.805v-8.797a2.805 2.805 0 00-2.805-2.804H5.482z'
        fill='#fff'
      />
      <path
        d='M1.785 9.849s1.785 1.753 3.25 2.486c1.467.733 13.77.701 15.682 0 1.912-.701 2.996-2.932 2.996-2.932M8.67 5.45s.127-1.976 1.083-2.804c.956-.829 4.908-.893 5.864 0 .956.892 1.148 2.804 1.148 2.804'
        stroke='#fff'
        strokeWidth={2.167}
        strokeLinecap='round'
      />
    </svg>
  );
};

export default OccupationIcon;
