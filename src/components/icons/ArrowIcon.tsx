const ArrowIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={27}
      height={56}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M2 2l21.5 29.5L2 54'
        stroke='#fff'
        strokeWidth={4}
        strokeLinecap='round'
      />
    </svg>
  );
};

export default ArrowIcon;
