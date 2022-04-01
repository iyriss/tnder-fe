const LikeIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={95}
      height={95}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={47.5} cy={47.5} r={47.5} fill="#A692D1" />
      <path
        d="M36.5 44s6.5-5.5 8-8.5 1-5 1.5-6 2.08-1.057 3.5-1c4.504.18 1 12 1 12s12.5 0 14 .5 1.524 1.69 1.5 3c-.033 1.8-3 3.5-3 3.5s2.414 1.981 2 3.5c-.29 1.066-2 2-2 2s1.834 2.05 1.5 3.5c-.342 1.486-3 2.5-3 2.5s1.69 1.704 1.5 3c-.222 1.509-2 2-3 2.5s-17.5 0-19 0-4.5-1.5-4.5-1.5"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 42a2 2 0 00-2 2v19a2 2 0 002 2h7a2 2 0 002-2V44a2 2 0 00-2-2h-7zm2 2a2 2 0 00-2 2v15a2 2 0 002 2h3a2 2 0 002-2V46a2 2 0 00-2-2h-3z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.55 62a2.75 2.75 0 100-5.5 2.75 2.75 0 000 5.5zm.05-.7a2 2 0 100-4 2 2 0 000 4z"
        fill="#fff"
      />
      <path
        d="M58.169 27.056c1.43-.404 3.5 1.5 3.5 1.5s2.069-1.904 3.5-1.5c1.68.476 2.293 2.279 2 4-.502 2.944-4.002 5.5-5.5 5.5-1.499 0-4.502-2.556-5.5-5.5-.561-1.654.32-3.524 2-4z"
        fill="#fff"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default LikeIcon;
