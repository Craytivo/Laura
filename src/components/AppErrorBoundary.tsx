import React from "react";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export class AppErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo): void {
    console.error("RU Sugaring application error", error, info);
  }

  handleReload = (): void => {
    window.location.reload();
  };

  render(): React.ReactNode {
    if (!this.state.hasError) return this.props.children;

    return (
      <main className="app-error" role="alert">
        <div className="app-error-inner">
          <span>RU SUGARING</span>
          <h1>Something went wrong.</h1>
          <p>Please refresh the page and try again.</p>
          <button type="button" onClick={this.handleReload}>Refresh</button>
        </div>
      </main>
    );
  }
}
