import { keyframes } from 'styled-components';

export const movingShape = keyframes`
0%{
  transform: scale(0.2) translate(20%, 30%);  
  
}

20%{
  transform: scale(0.5) translate(100%, 30%) rotate(180deg);  

}
60%{
  transform: scale(0.6) translate(30%, 20%);
}
70%{
  transform: scale(0.6) translate(30%, 20%);
}
80%{
  transform: scale(0.5) translate(120%, 30%) rotate(-180deg);
}
90%{
  transform: scale(0.3) translate(40%, 50%) ;
}
100%{
  transform: scale(0.2) translate(20%, 30%) ;
}
`;

export const bouncingShape = keyframes`
  0%{
    transform: scale(1.0);

  }
 
  60%{
    transform: scale(0.7) translateY(100%);
  }

  90%{
    transform: scale(0.5) translateY(150%);
  }
  100%{
    transform: scale(1.0) translateY(0%);
  }
`;

export const rotate = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
`;

export const increaseWidth = keyframes`
  0%{
    width: 0;
  }
  100%{
    width: 90%;
  }
`;

export const transthisguy = keyframes`
0%{
    transform: scale(1);
    opacity: 0;
    width: 100%;

}
20%{
    opacity: 1;
    

}
40% {
  width: 105%;

}
100%{
    transform: scale(1.1);
    opacity: 1;
    width: 120%;

}
`;

export const IncreaseHeight = keyframes`
0%{
   height: 0

}

100%{
    height: auto

}
`;

export const slideUp = keyframes`
0%{
  transform: translateY(20px);
    opacity: 0;
  }
  100%{
    transform: translateY(0);
    opacity: 1;
  }
`;

export const zoomIn = keyframes`
0%{
  transform: scale(1);

  }
  100%{
    transform: scale(1.03);

  }
`;

export const fadeIn = keyframes`
0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;
