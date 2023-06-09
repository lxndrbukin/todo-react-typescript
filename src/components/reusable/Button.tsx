import React from 'react';

interface ButtonTypes {
  primary: string;
  secondary: string;
  danger: string;
  success: string;
  light: string;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: keyof ButtonTypes;
}

class Button extends React.Component<ButtonProps> {
  get buttonTypes(): ButtonTypes {
    return {
      primary: 'text-white bg-sky-600 border border-sky-600 rounded p-2.5',
      secondary: 'text-white bg-gray-400 border border-gray-400 rounded p-2.5',
      danger: 'text-white bg-red-500 border border-red-500 rounded p-2.5',
      success: 'text-white bg-lime-500 border border-lime-500 rounded p-2.5',
      light: 'bg-white border border-white rounded p-2.5',
    };
  }

  render(): JSX.Element {
    const { buttonType, ...rest } = this.props;
    return (
      <button
        {...rest}
        className={`${this.buttonTypes[this.props.buttonType]} ${
          this.props.className
        } mx-0.5 flex flex-row`}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
