const CredentialIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={40}
      height={29}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.37 0A1.37 1.37 0 000 1.37v26.26C0 28.387.613 29 1.37 29h36.916a1.37 1.37 0 001.37-1.37V1.37A1.37 1.37 0 0038.286 0H1.37zm1.57 2.055c-.657 0-1.19.532-1.19 1.189v22.512c0 .657.533 1.189 1.19 1.189h33.777c.656 0 1.189-.532 1.189-1.189V3.244c0-.657-.533-1.189-1.19-1.189H2.94z'
        fill='#fff'
      />
      <circle cx={12.369} cy={10.58} fill='#fff' r={2.664} />
      <path
        d='M6.927 19.866s-.039-4.034 5.632-4.034c5.67 0 5.024 4.034 5.024 4.034'
        stroke='#fff'
        strokeWidth={2.664}
        strokeLinecap='round'
      />
      <path
        stroke='#fff'
        strokeWidth={2.283}
        strokeLinecap='round'
        d='M22.828 10.499l11.798-.065M22.828 15.599l11.798-.065'
      />
    </svg>
  );
};

export default CredentialIcon;
