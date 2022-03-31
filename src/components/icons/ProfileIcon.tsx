const ProfileIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={103}
      height={94}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path fill='#000' d='M0 0h103v94H0z' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M85 47.5C85 66.001 70.001 81 51.5 81 32.998 81 18 66.001 18 47.5 18 28.998 32.998 14 51.5 14 70.001 14 85 28.998 85 47.5zm-3.655.203c0 16.595-13.362 30.048-29.845 30.048-16.483 0-29.846-13.453-29.846-30.048S35.017 17.655 51.5 17.655s29.845 13.453 29.845 30.048z'
        fill='#fff'
      />
      <path
        d='M32 70.136l2.337-9.01a.844.844 0 01.81-.631l7.756-.066-3.377-6.332h2.11l-3.296-7.004a.844.844 0 01-.08-.36V42.28h-4.643v-3.255c0-.33.193-.631.495-.768l4.148-1.886 2.346-7.43a.844.844 0 01.805-.59h19.834c.384 0 .72.26.817.63l1.945 7.39 4.754 1.097c.418.097.697.49.65.916l-.34 3.052-5.064.844v4.485c0 .104-.02.208-.058.306l-2.897 7.45h2.955l-2.955 5.909h7.367c.384 0 .72.259.817.63l2.368 9.077'
        stroke='#fff'
        strokeWidth={3.377}
        strokeLinecap='round'
      />
    </svg>
  );
};

export default ProfileIcon;
